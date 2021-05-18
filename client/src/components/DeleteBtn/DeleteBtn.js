import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn tooltip" {...props} role="button" tabIndex="0">
      <i className="material-icons">delete</i>
    <span className="tooltiptext">Delete</span>
    </span>
    
  );
}

export default DeleteBtn;
