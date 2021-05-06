import React, { useState } from "react";
import { Input, FormBtn } from "../components/SignUpForm";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { useHistory } from "react-router-dom";

function Login() {
  const [formObject, setFormObject] = useState({});
  const [state, dispatch] = useUserContext();
  const [success, setSuccess] = useState(true);
  // const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject.userName, formObject.password);
    if (formObject.userName && formObject.password) {
      API.findOneUser({
        userName: formObject.userName,
        password: formObject.password,
      })
        .then((res) => {
          setSuccess(true);
          dispatch({
            type: "add",
            userName: res.data.userName,
            firstName: res.data.name.firstName,
            lastName: res.data.name.lastName,
          });
        })
        .catch((err) => {
          setSuccess(false);
          console.log(401);
        });
    }
  }

  return (
    <>
      <Card>
        <div className="container login-box">
          <Row>
            <Col size="l8 offset-l2">
              <form className="valign">
                <Input
                  onChange={handleInputChange}
                  name="userName"
                  placeholder="Username"
                />
                <Input
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(formObject.userName && formObject.password)}
                  onClick={handleFormSubmit}
                >
                  Log in
                </FormBtn>
                {!success && <div> Whoops! Please try again.</div>}
              </form>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
}

export default Login;
