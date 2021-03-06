import React from "react";

import "./AudioPhonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function AudioPhonetic(props) {
  return (
    <div className="AudioPhonetic">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        autoPlay={false}
        controls={true}
      />

      <br />
    </div>
  );
}
