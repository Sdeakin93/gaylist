import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item />
        <p>
          Brought to you by{" "}
          <a href="https://twitter.com/sjarquedeakin">Sarah</a>
        </p>
      </header>
    </div>
  );
}

export default App;
