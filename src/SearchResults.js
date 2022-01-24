import React from "react";

import WordMeaning from "./WordMeaning";
import AudioPhonetic from "./AudioPhonetic";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2 className="text-capitalize">"{props.results.word}"</h2>
/{props.results.phonetic}/
              <AudioPhonetic phonetic={props.results.phonetics[0]} />
           
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <WordMeaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
