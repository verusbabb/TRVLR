import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext({
  id: "",
  userName: "",
  firstName: "",
  lastName: "",
  isAuthenticated: "false",
  memberOf: [],
});
const { Provider } = UserContext;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const userData = {
        ...state,
        id: action.id,
        userName: action.userName,
        firstName: action.firstName,
        lastName: action.lastName,
        memberOf: action.memberOf,
        isAuthenticated: action.isAuthenticated,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      return userData;
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    case "update":
      const updateData = { ...state, memberOf: action.memberOf };
      localStorage.setItem("user", JSON.stringify(updateData));
      return { ...state, memberOf: action.memberOf };

    case "timeOut":
      return {
        ...state,
        userName: "",
        firstName: "",
        lastName: "",
        memberOf: [],
        isAuthenticated: "false",
      };

    default:
      return state;
  }
}
const user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function UserProvider({ value = {}, ...props }) {
  const [state, dispatch] = useReducer(reducer, user);

  return <Provider value={{ state, dispatch }} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
