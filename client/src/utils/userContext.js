import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext({
  id: "",
  userName: "",
  firstName: "",
  lastName: "",
  memberOf: [],
});
const { Provider } = UserContext;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      localStorage.setItem(
        "user",
        JSON.stringify([
          // ...state,
          {
            id: action.id,
            userName: action.userName,
            firstName: action.firstName,
            lastName: action.lastName,
          },
        ])
      );
      return [
        ...state,
        {
          id: action.id,
          userName: action.userName,
          firstName: action.firstName,
          lastName: action.lastName,
        },
      ];
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    case "update":
      return { ...state, memberOf: action.memberOf };
    default:
      return state;
  }
}
const user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];

function UserProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, user);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
