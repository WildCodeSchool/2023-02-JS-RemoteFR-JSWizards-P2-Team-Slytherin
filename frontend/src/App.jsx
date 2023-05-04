import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ScorePage from "./pages/ScorePage";
import Page404 from "./pages/Page404";

import "./App.css";

function App() {
  /**
   * CONSTANTS
   */
  const API = "https://hp-api.onrender.com/api/characters";
  const GAME_SCORE_START = 1200;

  /**
   * STATES
   */
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    house: "",
  });
  const [score, setScore] = useState(GAME_SCORE_START);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  /**
   * FUNCTIONS
   */
  const handleAddPlayerInfo = (player) => {
    setPlayerInfo(player);
  };

  /**
   * Load data from API
   */
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
              <GamePage
                characters={characters}
                playerInfo={playerInfo}
                score={score}
                setScore={setScore}
              />
            }
          />

          <Route path="score" element={<ScorePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
}

export default App;
