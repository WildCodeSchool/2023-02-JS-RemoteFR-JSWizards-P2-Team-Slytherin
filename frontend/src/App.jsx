import Home from "./pages/Home";
import wizards from "./data/data.json";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import Score from "./components/Score";

import "./App.css";

function App() {
  const wizard = wizards[4];
  const startingScore = 1000;
  return (
    <div className="App">
      <Home />
      <FrontCard name={wizard.name} image={wizard.image} />
      <BackCard />
      <Score startingScore={startingScore} />
    </div>
  );
}

export default App;
