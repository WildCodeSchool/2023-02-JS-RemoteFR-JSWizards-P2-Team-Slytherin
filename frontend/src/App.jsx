import Home from "./pages/Home";
import CardBoard from "./components/CardBoard";
import wizards from "./data/data.json";
import "./App.css";

function App() {
  const wizard = wizards[7];
  return (
    <div className="App">
      <Home />

      <CardBoard name={wizard.name} image={wizard.image} />
    </div>
  );
}

export default App;
