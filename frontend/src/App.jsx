import Home from "./pages/Home";
import wizards from "./data/data.json";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import Timer from "./components/Timer";

import "./App.css";

function App() {
  const wizard = wizards[4];
  const gameTime = 5;
  return (
    <div className="App">
      <Home />
      <FrontCard name={wizard.name} image={wizard.image} />
      <BackCard />
      <Timer gameTime={gameTime} />
    </div>
  );
}

export default App;
