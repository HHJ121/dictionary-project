import React from "react";

export default function WordMeaning(props) {
  return (
    <div className="WordMeaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>"{definition.example}"</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
