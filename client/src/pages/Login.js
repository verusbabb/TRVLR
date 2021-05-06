import React, { useState } from "react";
import { Input, FormBtn } from "../components/SignUpForm";

import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

function Login() {
  const [formObject, setFormObject] = useState({});

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
        .then((res) => (window.location.href = "/dashboard/"))
        .catch((err) => console.log(401));
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
              </form>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
}

export default Login;
