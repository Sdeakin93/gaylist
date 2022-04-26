import "./App.css";
import Item from "./components/Item";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart>
          <br />

          <h1>Gay Stuff ⌐■_■</h1>
          <Item
            background="#9d0053"
            alt="Charles and Carlos"
            title="Carlos Sainz and Charles Leclerc"
            text="My Ferrari boys. Imola was not great but they still look like two angelic cherubs. Love my lil twinks."
          />
          <Item
            background="#ad4a7f"
            alt="Googly eyes"
            title="Crying at Everything Everywhere All At Once"
            text="I CRIED AND LAUGHED AND NOW I WANT A PET ROCK. I do not understand how some people do not like this film they are simply wrong and Michelle Yeoh can murder me and I would say thank you "
          />
          <Item
            background="#cc5494"
            text="I am literally obsessed with this podcast and it is the funniest thing in the world. Catherine and Helen plz never stop."
            title="Trusty Hogs giving me a taste of home"
          />
          <Item
            background="#f78951"
            title="Rina Sawayama's music"
            text="More specifically the guitar solo in Dynasty because I can play it and I will play it on stage thxs"
          />
          <Item
            background="#ef652e"
            title="Buying New Balance shoes on StockX"
            text="I can't wait to look like a 90s sitcom dad with these new shoes."
          />
          <Item
            background="#d22313"
            title="Smelling good"
            text="Smell sexy, be sexy. I remembered this week that Harry Styles and I wear the same fragrance and it made me feel more confident then anything ever has before."
          />
          <h1>Straight Stuff ¯\_(ツ)_/¯</h1>
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
