import React from "react";

// This Row component lets us use a materialize row without having to think about class names
export function Row(props) {
  return <div className="row">{props.children}</div>;
}
