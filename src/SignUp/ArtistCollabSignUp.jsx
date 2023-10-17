import React from "react";
import "./SignUpStyles.css";
import "./ArtistCollabSignUp.css";
import TextField from "./TextField";

function ArtistCollabSignUp(props) {
  return (
    <div className="ArtistCollabSignUp">
      <h1> Work With Us </h1>
      <div className="smallCenter">
        An eclectic range of artists are collaborating with Goldloxe to create
        1:1 ultra rares within her 10k collection. Apply to be one of the
        artists here.{" "}
      </div>
      <div className="name input">
        {" "}
        Name <TextField />{" "}
      </div>
      <div className="email input">
        {" "}
        Email <TextField />
      </div>
      <div className="link input">
        {" "}
        link your work <TextField />{" "}
      </div>
      <div className="input submitArtistCollabButton"> Send </div>
    </div>
  );
}

export default ArtistCollabSignUp;
