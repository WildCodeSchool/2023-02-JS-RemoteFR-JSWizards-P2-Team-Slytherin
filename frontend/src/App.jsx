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
  const GAME_DURATION = 60;
  const LOCAL_STORAGE_KEY_BOARD = "appGame.board";
  const LOCAL_STORAGE_KEY_PLAYER = "appGame.player";

  /**
   * STATES
   */
  const [playerInfo, setPlayerInfo] = useState({});
  const [score, setScore] = useState(GAME_SCORE_START);
  const [scoreBoard, setScoreBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  /**
   * FUNCTIONS
   */
  const updateScoreBoard = (player) => {
    // scoreBoard empty? simply add the new player
    if (scoreBoard.length === 0) {
      setScoreBoard([...scoreBoard, player]);
    } else {
      // check whether player already exists, if so overwrite player info
      const match = scoreBoard.find((obj) => obj.name === player.name);
      // if so, overwrite player info otherwise simply append the new player
      if (match) {
        setScoreBoard(
          scoreBoard.map((play) => (play.name === match.name ? player : play))
        );
      } else {
        setScoreBoard([...scoreBoard, player]);
      }
    }
  };

  const updatePlayerInfo = (player) => {
    setPlayerInfo(player);
    updateScoreBoard(player);
  };

  /**
   * LOCAL STORAGE
   */
  // recall data from local storage (if any)
  useEffect(() => {
    const storedPlayer = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_PLAYER)
    );
    if (storedPlayer) setPlayerInfo(storedPlayer);

    const storedBoard = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_BOARD)
    );
    if (storedBoard) setScoreBoard(storedBoard);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PLAYER, JSON.stringify(playerInfo));
  }, [playerInfo]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_BOARD, JSON.stringify(scoreBoard));
  }, [scoreBoard]);

  /**
   * API
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
    // cancel current API request on component unmount
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
            element={<HomePage updatePlayerInfo={updatePlayerInfo} />}
          />
          <Route
            path="game"
            element={
              <GamePage
                characters={characters}
                playerInfo={playerInfo}
                score={score}
                setScore={setScore}
                gameDuration={GAME_DURATION}
                updatePlayerInfo={updatePlayerInfo}
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
