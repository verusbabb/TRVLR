import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/SignUpForm";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/userContext";

function Signup() {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [success, setSuccess] = useState(false);
  const [state, dispatch] = useUserContext();

  const validated = () => {
    setSuccess(true);
    setTimeout(function () {
      window.location.href = "/dashboard/";
    }, 2000);
    return () => {
      clearTimeout();
    };
  };

  // useEffect(() => {}, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(
      formObject.userName,
      formObject.firstName,
      formObject.lastName,
      formObject.password
    );
    if (
      formObject.userName &&
      formObject.firstName &&
      formObject.lastName &&
      formObject.password
    ) {
      API.saveUser({
        userName: formObject.userName,
        name: {
          firstName: formObject.firstName,
          lastName: formObject.lastName,
        },
        password: formObject.password,
      })
        .then((res) => {
          dispatch({
            type: "add",
            userName: formObject.userName,
            firstName: formObject.firstName,
            lastName: formObject.lastName
          });

          validated();
        }) //add dispatch inside here {type: "addUser",payload: formObject}
        .catch((err) => console.log(err));
    }
  }

  return (
    
      <Container>
        <Row>
          <Col size="l8 offset-l2 s12">
          <Card>
          <Row>
                <h3>Sign Up for a New Account</h3>
              </Row>
            <form>
              <Input
                onChange={handleInputChange}
                name="userName"
                placeholder="Username (required)"
              />
              <Input
                onChange={handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="password"
                type="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={
                  !(
                    formObject.userName &&
                    formObject.firstName &&
                    formObject.lastName &&
                    formObject.password
                  )
                }
                onClick={handleFormSubmit}
              >
                Submit User
              </FormBtn>
              <Link to="/login">Already have an account? Log in here</Link>
              {success && <div> Success! Redirecting to Dashboard.</div>}
            </form>
            </Card>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Signup;
