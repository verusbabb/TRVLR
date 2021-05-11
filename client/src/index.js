import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import "materialize-css";
import { UserProvider } from "./utils/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
