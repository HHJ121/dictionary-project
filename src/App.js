import "./App.css";


import DictionaryWordSearch from "./DictionaryWordSearch";
import TypewriterEffect from "./TypewriterEffect";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <TypewriterEffect
            strings="Unlock the word .  Seek the meaning .  Acquire the knowledge"
            autoStart={true}
            loop={true}
          />
          <br />
        </header>
        <main>
          <DictionaryWordSearch defaultKeyword="vintage" />
        </main>
        <footer className="App-footer mt-5">
          <a
            href="https://github.com/HHJ121/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a href="https://guidedbythe1.com/" target="_blank" rel="noreferrer">
            Haw-Harn Jiang
          </a>
          , hosted by{" "}
          <a
            href="https://heuristic-bohr-ddaf59.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
