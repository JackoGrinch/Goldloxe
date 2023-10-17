import React from "react";
import "./SignUpStyles.css";

function TextField(props) {
  return (
    <div className="textField">
      <input type={props.type} className="inputBox" type="text" />
    </div>
  );
}

export default TextField;
