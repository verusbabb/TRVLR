import React, { useState, useEffect } from "react";

import { Input, FormBtn } from "../components/SignUpForm";


function Login() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value });
    }

    return (
    <div className="container login-box">
      <div className="row">
        <div className="col l8 offset-l2">
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
              disabled={
                !(
                  formObject.userName &&
                  formObject.password
                )
              }
            >
              Log in
            </FormBtn>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Login;