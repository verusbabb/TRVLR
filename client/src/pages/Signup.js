import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/SignUpForm";

function Signup() {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [lastSignUp, setLastSignUp] = useState({});

  useEffect(() => {
    API.getUsers().then((users) => {
      setUsers(users.data);
      setUser(users.data[0]);
      console.log(users.data);
      let userArray = users.data;
      function last(array, n) {
        if (array == null) return void 0;
        if (n == null) return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));
      }
      console.log(last(userArray));
      let newSignUp = last(userArray).name.firstName;
      setLastSignUp(newSignUp);
      console.log(lastSignUp);
    });
  }, []);

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
    window.location.href = "/login";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col lg 6">
          {/* <UserContext.Provider value={{ users }}> */}
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
          {/* </UserContext.Provider> */}
        </div>
      </div>
    </div>
  );
}

export default Signup;
