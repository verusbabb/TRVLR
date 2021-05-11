import React, { useState, useEffect } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const [formObject, setFormObject] = useState({});
  const [success, setSuccess] = useState(true);
  const [fail, setFail] = useState(true);
  const history = useHistory();
  const [state, dispatch] = useUserContext();

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
        .then(async (res) => {
          setSuccess(true);
          setFail(false);

          dispatch({
            type: "add",
            userName: res.data.userName,
            firstName: res.data.name.firstName,
            lastName: res.data.name.lastName,
          });
          console.log(state);

          history.push("/dashboard");
        })
        .catch((err) => {
          setSuccess(false);
          setFail(true);
          console.log(401);
        });
    }
  }

  return (
    <>

      <div className="container login-box">
        <Row>
          <Col size="l8 offset-l2 s12">
            <Card>
              <Row>
                <h3>Log Into an Existing Account</h3>
              </Row>
              <form className="valign">
                <Input
                  onChange={handleInputChange}
                  name="userName"
                  placeholder="Username"
                />
                <Input
                  onChange={handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(formObject.userName && formObject.password)}
                  onClick={handleFormSubmit}
                >
                  Log in
                </FormBtn>
                <Link to="/signup">Create a new account</Link>
                {!success && <div> Whoops! Please try again.</div>}
                {!fail && <div> Success! You are now logged in.</div>}
              </form>
            </Card>
          </Col>
        </Row>
      </div>

    </>
  );
}

export default Login;
