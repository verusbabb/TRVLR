import React from "react";

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container(props) {
  return <div className={`container`}>{props.children}</div>;
}
