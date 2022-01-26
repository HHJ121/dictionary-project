import React, { useState } from "react";
import axios from "axios";


import SearchResults from "./SearchResults";
import TypewriterEffect from "./TypewriterEffect";
import "./DictionaryWordSearch.css";
import { Oval } from "react-loader-spinner";

export default function DictionaryWordSearch(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [searchLoaded, setSearchLoaded] = useState(false);

  function showDefinition(response) {
    setResults(response.data[0]);
  }

  function wordSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showDefinition);
  }

  function handleSubmit(event) {
    event.preventDefault();

    wordSearch();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setSearchLoaded(true);
    wordSearch();
  }
  if (searchLoaded) {
    return (
      <div className="DictionaryWordSearch">
        <section>
          <TypewriterEffect strings="What word would you like to search?" autoStart={true} loop={true} pauseFor={10000} />
          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              autoComplete="off"
              autoFocus={true}
              onChange={keywordChange}
            />
          </form>
          <div className="hint-words">
            Suggested words: faith, seeking, olive, wisdom, revelation . . .
          </div>
        </section>
        <SearchResults results={results} />
      </div>
    );
  } else {
    load();
    return (
      <div>
        <h1>Loading...collecting all the info for you</h1>
        <Oval color="rgb(255, 223, 182)" height={80} width={80} />
      </div>
    );
  }
}
