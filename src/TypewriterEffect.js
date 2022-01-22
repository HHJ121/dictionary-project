import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
    return (
      <div className="TypewriterEffect">
        <Typewriter
          options={{
            strings: ["Unlock the word", "Seek its meaning", "Acquire the knowledge"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    );
}