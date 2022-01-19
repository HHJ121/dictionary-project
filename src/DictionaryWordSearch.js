import React, { useState } from "react";
import axios from "axios";

import "./DictionaryWordSearch.css";

export default function DictionaryWordSearch() {
  let [keyword, setKeyword] = useState("");

  function showDefinition(response) {
    console.log(response.data);
  }

  function wordSearch(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showDefinition);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionaryWordSearch">
      <form onSubmit={wordSearch}>
        <input
          type="search"
          placeholder="Enter a word"
          autoComplete="off"
          autoFocus={true}
          onChange={keywordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
