import React from "react";

import WordMeaning from "./WordMeaning";
import AudioPhonetic from "./AudioPhonetic";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <section>
          <h2 className="text-capitalize">"{props.results.word}"</h2>
         <div className="phonetic-text">/{props.results.phonetic}/</div> 
          <AudioPhonetic phonetic={props.results.phonetics[0]} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <WordMeaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
