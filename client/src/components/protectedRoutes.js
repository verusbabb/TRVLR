import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../utils/userContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuthenticated) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
