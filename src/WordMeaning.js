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
              <i class="bi bi-book"></i> {" "}
              <span className="definition">{definition.definition}</span>

              <br />
              <span className="example">{definition.example}</span>
              <br />
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <br />
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
