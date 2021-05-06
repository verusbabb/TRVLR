import React, { useState } from "react";
import { Input, FormBtn } from "../components/SignUpForm";

import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

function Login() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
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
