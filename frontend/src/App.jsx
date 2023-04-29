import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";
import ScorePage from "./pages/ScorePage";

import "./App.css";

function App() {
  const API = "https://hp-api.onrender.com/api/characters";

  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    house: "",
  });
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const handleAddPlayerInfo = (player) => {
    setPlayerInfo(player);
  };

  // Load data from API
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    axios
      .get(API, { signal })
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error(`Download error: ${error.message}`))
      .finally(() => setLoading(false));
    // Cancel current API request on component unmount
    return function cleanup() {
      controller.abort();
    };
  }, []);

  if (!loading)
    return (
      <div className="App min-h-screen">
        <Routes>
          <Route
            path="/"
            element={<HomePage handleAddPlayerInfo={handleAddPlayerInfo} />}
          />
          <Route
            path="game"
            element={
              <GamePage characters={characters} playerInfo={playerInfo} />
            }
          />
          <Route path="rules" element={<RulesPage />} />
          <Route path="score" element={<ScorePage />} />
        </Routes>
      </div>
    );
}

export default App;
