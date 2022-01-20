import React from "react";

import "./WordMeaning.css";

export default function WordMeaning(props) {
  return (
    <div className="WordMeaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <br />
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
