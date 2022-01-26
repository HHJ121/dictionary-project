import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect(props) {
    return (
      <div className="TypewriterEffect">
        <Typewriter
          options={{
            strings: [props.strings],
            autoStart: props.autoStart,
            loop: props.loop,
            pauseFor: props.pauseFor,
          }}
        />
      </div>
    );
}