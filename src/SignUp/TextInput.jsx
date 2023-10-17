import React, { useState } from "react";
import "./SignUpStyles.css";
import "./CheckBox.jsx";
import TextField from "./TextField.jsx";
import CheckBox from "./CheckBox.jsx";

function TextInput() {
  const OnClick = {};
  const OnHover = {
    backgroundColor: "grey",
    cursor: "pointer"
  };
  const Default = {
    backgroundColor: "black",
    cursor: "default"
  };
  const [sendButtonStyle, setSendButtonStyle] = useState(Default);

  return (
    <div>
      <h1> Newsletter </h1>
      <CheckBox />
      <div className="inputContainer">
        <div>
          <TextField type={"email"} />
        </div>
        <div
          className="sendButton"
          style={sendButtonStyle}
          onMouseEnter={() => setSendButtonStyle(OnHover)}
          onMouseLeave={() => setSendButtonStyle(Default)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

export default TextInput;
