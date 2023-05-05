import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";

export default function ScorePage({ keyLocalStorage }) {
  const CUP_ICONS = [
    { src: "../assets/icon/scorecupgold.svg", alt: "gold cup" },
    { src: "../assets/icon/scorecupsilver.svg", alt: "silver cup" },
    { src: "../assets/icon/scorecupbronze.svg", alt: "bronze cup" },
  ];

  const [scoreBoard, setScoreBoard] = useState([]);

  useEffect(() => {
    // 1. recall data from local storage
    const storedBoard = JSON.parse(localStorage.getItem(keyLocalStorage));
    let cloneStoredBoard = [...storedBoard];
    // 2. if any stats stored,
    if (cloneStoredBoard) {
      // 2a. sort by score descending
      // cloneStoredBoard.sort((x, y) => y.score - x.score);
      cloneStoredBoard.sort((x, y) => {
        if (x.score === null || y.score === null) return -1;
        return y.score - x.score;
      });
      // 2b. format score data for display
      cloneStoredBoard = cloneStoredBoard.map((stat) => {
        if (stat.score === null) return { ...stat, score: "-" };
        return { ...stat, score: `${String(stat.score)} pts` };
      });
    }
    // 3. update state
    setScoreBoard([...cloneStoredBoard]);
  }, []);

  return (
    <div className="bg-[url('../assets/img/background-welcome-screen-desktop.png')] bg-cover bg-left-bottom">
      <Layout>
        <div className="relative">
          <h1 className="mb-12 mr-[64px] mt-[84px] flex justify-end font-cinzel text-4xl text-neutral-light">
            Best players
          </h1>
          <div className="img-wrapper absolute left-1/2 top-full z-10 h-[120px] w-[169px] -translate-x-1/2 translate-y-1/2 rotate-[-8deg]">
            <img src="../assets/img/flying-car-desktop.png" alt="flying car" />
          </div>
        </div>

        <div className="scoreboard z-0 ml-auto mr-[64px] flex h-[346px] w-[536px] flex-col items-center gap-4 overflow-auto rounded-xl font-ibarra text-lg text-neutral-light backdrop-blur-sm">
          <div className="header flex w-full items-center justify-around gap-4 text-center">
            <div className="img-wrapper flex-1" />
            <h2 className="flex-1 font-cinzel text-xl">Player</h2>
            <h2 className="flex-1 font-cinzel text-xl">Score</h2>
          </div>

          {scoreBoard.length !== 0
            ? scoreBoard.map((stat, index) => (
                <div
                  key={stat.name}
                  className="stats flex w-full items-center justify-around gap-4 text-center font-ibarra text-lg"
                >
                  <div className="img-wrapper flex flex-1 items-center justify-center">
                    {[0, 1, 2].includes(index) &&
                    stat.score !== "-" &&
                    stat.score !== "0 pts" ? (
                      <img
                        src={CUP_ICONS[index].src}
                        alt={CUP_ICONS[index].alt}
                      />
                    ) : null}
                  </div>
                  <p className="flex-1">{stat.name}</p>
                  <p className="flex-1">{stat.score}</p>
                </div>
              ))
            : null}
        </div>
      </Layout>
    </div>
  );
}

ScorePage.propTypes = {
  keyLocalStorage: PropTypes.string.isRequired,
};
