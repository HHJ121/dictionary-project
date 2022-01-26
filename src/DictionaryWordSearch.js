import React, { useState } from "react";
import axios from "axios";

import SearchResults from "./SearchResults";
import TypewriterEffect from "./TypewriterEffect";
import WordPhotos from "./WordPhotos";
import "./DictionaryWordSearch.css";
import { Oval } from "react-loader-spinner";

export default function DictionaryWordSearch(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [searchLoaded, setSearchLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showDefinition(response) {
    setResults(response.data[0]);
  }

  function displayPexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function wordSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showDefinition);

    let pexelApiKey =
      "563492ad6f91700001000001a1d7159fbc7c4f76af5b3b88eda9c34d";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };

    axios.get(pexelApiUrl, { headers: headers }).then(displayPexelResponse);
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
          <TypewriterEffect
            strings="What word would you like to search for?"
            autoStart={true}
            loop={true}
            pauseFor={20000}
          />
          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a word"
              autoComplete="off"
              autoFocus={true}
              onChange={keywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint-words">
            i.e. faith, seeking, olive, wisdom, revelation . . .
          </div>
        </section>
        <SearchResults results={results} />
        <WordPhotos photos={photos} />
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
