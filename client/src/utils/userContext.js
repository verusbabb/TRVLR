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
      return [
        ...state,
        {
          id: state.length * Math.random(),
          userName: action.userName,
          firstName: action.firstName,
          lastName: action.lastName,
        },
      ];
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
}

function UserProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
