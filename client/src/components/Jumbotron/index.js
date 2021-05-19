import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{clear: "both", padding: "1vh", textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
