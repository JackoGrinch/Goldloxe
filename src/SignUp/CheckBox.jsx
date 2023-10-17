import React, { useState } from "react";
import "./SignUpStyles.css";

function CheckBox(props) {
  const Unchecked = {
    backgroundColor: "white"
  };
  const Checked = {
    backgroundColor: "black"
  };

  const [checkBox, setCheckBox] = useState(false);

  return (
    <div className="CheckBox">
      <div className="CheckboxContainer">
        <h3> I consent to being contacted </h3>
        <div
          className="tickBox"
          style={!checkBox ? Unchecked : Checked}
          onClick={() => setCheckBox(!checkBox)}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
