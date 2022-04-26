import "./App.css";
import Item from "./components/Item";
import Chart from "./components/Chart";

import twinks from "./media/charles-and-carlos.png";
import googly from "./media/googly.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart>
          <Item
            background="#9d0053"
            image={twinks}
            alt="Charles and Carlos"
            title="Carlos Sainz and Charles Leclerc"
            text="My Ferrari boys. Imola was not great but they still look like two angelic cherubs."
          />
          <Item
            background="#ad4a7f"
            right
            image={googly}
            alt="Googly eyes"
            title="Crying at Everything Everywhere All At Once"
            text="I CRIED AND LAUGHED AND NOW I WANT A PET ROCK"
          />
          <Item
            background="#cc5494"
            image={twinks}
            alt="Charles and Carlos"
            text="I love these twinks"
          />
          <Item
            background="#f78951"
            right
            image={twinks}
            alt="Charles and Carlos"
            text="I love these twinks"
          />
          <Item
            background="#ef652e"
            image={twinks}
            alt="Charles and Carlos"
            text="I love these twinks"
          />
          <Item
            background="#d22313"
            right
            image={twinks}
            alt="Charles and Carlos"
            text="I love these twinks"
          />
          <h1>Bad Stuff</h1>
          <Item
            background="#000000"
            color="white"
            title="Elon buying twitter :("
          />
        </Chart>
      </header>
    </div>
  );
}

export default App;
