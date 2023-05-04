import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SortingHat from "../components/SortingHat";
import CardBoard from "../components/CardBoard";
import Score from "../components/Score";
import Timer from "../components/Timer";
import BackCard from "../components/BackCard";
import ClueList from "../components/ClueList";
import ModalConfirm from "../components/ModalConfirm";
import ModalEndGame from "../components/ModalEndGame";
import ModalCountDown from "../components/ModalCountDown";

import filterCharacters from "../helper/filterCharacters";
import hatCard from "../helper/pickHatCard";
import checkEndGame from "../helper/checkEndGame";

export default function GamePage({
  characters,
  playerInfo,
  score,
  setScore,
  gameDuration,
  updatePlayerInfo,
}) {
  /**
   * STATES
   */
  const [filteredCharacters] = useState(filterCharacters(characters, "image"));
  const [hatCardPick] = useState(hatCard(filteredCharacters));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isPaused, setisPaused] = useState(true);
  const [endRequested, setEndRequested] = useState({
    status: false,
    remainingTime: null,
  });
  const [message, setMessage] = useState({
    category: "",
    response: `Greetings ${playerInfo.name} from ${playerInfo.house}! \n Will you be able to find the right card? \n Click on a hint to begin...`,
  });
  const [result, setResult] = useState({
    success: null,
    heading: "",
    message: "",
  });

  // TEST
  const [endGame, triggerEndGame] = useState(false);

  /**
   * FUNCTIONS
   */
  const addMessage = (newMessage) => setMessage(newMessage);
  const zeroScore = () => setScore(0);
  const pauseTimer = () => setisPaused(!isPaused);
  const decrementScore = (val) => {
    if (val < score) return setScore((prevScore) => prevScore - val);
    return zeroScore();
  };
  const prepareEndGame = (status, remainingTime = null) => {
    // check whether the game is a win or loose
    const gameResult = checkEndGame(
      selectedCard,
      hatCardPick,
      playerInfo,
      endRequested
    );
    setResult(gameResult);
    // update info player with proper score
    if (!gameResult.success) {
      zeroScore();
      // setScore(0);
    }
    // trigger endGame modal
    setEndRequested((prev) => ({ ...prev, status, remainingTime }));
  };

  useEffect(() => {
    if (endRequested.status) {
      // update player info
      const newPlayer = { ...playerInfo };
      updatePlayerInfo({ ...newPlayer, score });
      // trigger modal end Screen
      triggerEndGame(true);
    }
  }, [endRequested]);

  /**
   * PAGE CONTENT
   */
  return (
    <div className="bg-[url('../assets/img/background-game-screen-desktop.png')] bg-cover">
      <Layout>
        <div className="layout-wrapper grid min-h-full grid-rows-[auto_1fr] justify-items-center">
          <div className="relative -top-7 mx-auto flex justify-center gap-16">
            <ModalCountDown pauseTimer={pauseTimer} />
            <Timer
              gameDuration={gameDuration}
              decrementScore={decrementScore}
              zeroScore={zeroScore}
              prepareEndGame={prepareEndGame}
              isPaused={isPaused}
            />
            <Score score={score} />
          </div>
          <div className="relative -top-3 grid min-h-full w-full grid-cols-[2fr_minmax(auto,1fr)] place-items-center">
            <SortingHat message={message} hatCardPick={hatCardPick} />
            <BackCard />
            <CardBoard
              characters={filteredCharacters}
              setIsModalOpen={setIsModalOpen}
              setSelectedCard={setSelectedCard}
            />
            <ClueList addMessage={addMessage} decrementScore={decrementScore} />
          </div>
        </div>
        {isModalOpen && (
          <ModalConfirm
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            setIsModalOpen={setIsModalOpen}
            prepareEndGame={prepareEndGame}
            pauseTimer={pauseTimer}
          />
        )}
        {endGame && (
          <ModalEndGame
            selectedCard={selectedCard}
            hatCardPick={hatCardPick}
            result={result}
          />
        )}
      </Layout>
    </div>
  );
}

/**
 * PROPTYPES
 */
GamePage.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  playerInfo: PropTypes.shape({
    name: PropTypes.string,
    house: PropTypes.string,
    score: PropTypes.number,
  }),
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  gameDuration: PropTypes.number.isRequired,
  updatePlayerInfo: PropTypes.func.isRequired,
};

GamePage.defaultProps = {
  playerInfo: PropTypes.shape({
    name: "",
    house: "",
    score: null,
  }),
};
