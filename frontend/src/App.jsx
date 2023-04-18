import Home from "./pages/Home";
import wizards from "./data/data.json";
import FrontCard from "./components/FrontCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      {wizards.map((wizard) => (
        <FrontCard key={wizard.id} name={wizard.name} image={wizard.image} />
      ))}
    </div>
  );
}

export default App;
