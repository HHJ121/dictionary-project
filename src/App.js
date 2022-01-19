import "./App.css";

import DictionaryWordSearch from "./DictionaryWordSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <DictionaryWordSearch />
        </main>
        <footer className="App-footer">Coded by Haw-Harn Jiang</footer>
      </div>
    </div>
  );
}
