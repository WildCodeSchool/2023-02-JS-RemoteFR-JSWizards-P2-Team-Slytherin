import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";
import ScorePage from "./pages/ScorePage";
import "./App.css";

function App() {
  const API = "https://hp-api.onrender.com/api/characters";

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    axios
      .get(API, { signal })
      .then((response) =>
        setCharacters(response.data.filter((wizards) => wizards.image !== ""))
      )
      .catch((error) => console.error(`Download error: ${error.message}`))
      .finally(() => setLoading(false));

    console.log(characters);
    // cancel current API request on component unmount
    return function cleanup() {
      controller.abort();
    };
  }, []);

  if (!loading)
    return (
      <div className="App min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<GamePage characters={characters} />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="score" element={<ScorePage />} />
        </Routes>
      </div>
    );
}

export default App;
