import React, { useState } from "react";
import axios from "axios";

import SearchResults from "./SearchResults";

import "./DictionaryWordSearch.css";

export default function DictionaryWordSearch() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function showDefinition(response) {
    setResults(response.data[0]);
  }

  function wordSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showDefinition);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionaryWordSearch">
      <form className="mb-4" onSubmit={wordSearch}>
        <input
          type="search"
          placeholder="Enter a word"
          autoComplete="off"
          autoFocus={true}
          onChange={keywordChange}
          className="form-control"
        />
      </form>
      <SearchResults results={results} />
    </div>
  );
}
