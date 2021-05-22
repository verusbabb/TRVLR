import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <div className="delete-btn " {...props} role="button" tabIndex="0">
      <i className="material-icons">clear</i>
    </div>
    
  );
}

export default DeleteBtn;
