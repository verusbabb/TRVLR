import React from "react";

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="m12"> instead of <div className="col m12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col " + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
