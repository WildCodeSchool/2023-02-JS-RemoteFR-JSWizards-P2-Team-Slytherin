import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";
import ScorePage from "./pages/ScorePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "@components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<GamePage />} />
        <Route path="rules" element={<RulesPage />} />
        <Route path="score" element={<ScorePage />} />
      </Routes>
    </div>
  );
}

export default App;
