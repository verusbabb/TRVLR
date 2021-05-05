import React from "react";

const UserContext = React.createContext({
  user: {},
  users: [],
});

export default UserContext;
