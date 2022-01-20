import React from "react";

import WordMeaning from "./WordMeaning";


export default function SearchResults(props) {
   console.log(props.results);
   if (props.results) {
       return (
        <div className="SearchResults">
        <h2>
            {props.results.word}
        </h2>
        {props.results.meanings.map(function(meaning, index) {
            return (
                <div key={index}>
                    <WordMeaning meaning={meaning} />
                    </div>
            )
        })}
        </div>
    );
   } else {
       return null;
   }
    
}