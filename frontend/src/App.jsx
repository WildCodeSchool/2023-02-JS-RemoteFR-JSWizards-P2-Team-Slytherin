import Home from "./pages/Home";
import wizards from "./data/data.json";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import ClueList from "./components/ClueList";

import "./App.css";

function App() {
  const wizard = wizards[4];
  return (
    <div className="App">
      <Home />
      <FrontCard name={wizard.name} image={wizard.image} />
      <BackCard />
      <ClueList />
    </div>
  );
}

export default App;
