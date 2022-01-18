import typewriter from "./typewriter.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={typewriter}
          className="background-image img-fluid"
          alt="type writer"
        />
      </header>
    </div>
  );
}
