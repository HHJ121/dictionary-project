import React from "react";

import "./WordMeaning.css";
import Synonyms from "./Synonyms";

export default function WordMeaning(props) {
  return (
    <div className="WordMeaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
             <i className="bi bi-book"></i>{" "}
              <div className="definition"> {definition.definition}</div>
             
              <div className="example">{definition.example}</div>
             
              <Synonyms synonyms={definition.synonyms} />
             
             
            </p>
          </div>
        );
      })}
    </div>
  );
}
