import Home from "./pages/Home";
import CardBoard from "./components/CardBoard";
import wizards from "./data/data.json";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";

import "./App.css";

function App() {
  const wizard = wizards[4];
  return (
    <div className="App">
      <Home />
      <CardBoard />
      <FrontCard name={wizard.name} image={wizard.image} />
      <BackCard />
    </div>
  );
}

export default App;
