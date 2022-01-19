import React, { useState } from "react";

import "./DictionaryWordSearch.css";

export default function DictionaryWordSearch() {
let [keyword, setKeyword] = useState("");

  function wordSearch(event) {
      event.preventDefault();
      alert(`Searching for ${keyword}...`)
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
        <input type="submit" value="Search"  />
      </form>
    </div>
  );
}
