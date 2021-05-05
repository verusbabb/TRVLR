import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/SignUpForm";

function Signup() {
  //   const [user, setUser] = useState([]);
  const [formObject, setFormObject] = useState({});

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
        .then((res) => alert("User added!"))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col lg 6">
          <form>
            <Input
              onChange={handleInputChange}
              name="userName"
              placeholder="username (required)"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
