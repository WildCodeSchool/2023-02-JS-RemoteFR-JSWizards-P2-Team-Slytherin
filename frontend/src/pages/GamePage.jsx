import { useState } from "react";
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

export default function GamePage({ characters, playerInfo, score, setScore }) {
  /**
   * CONSTANTS
   */
  const gameDuration = 60;

  /**
   * STATES
   */
  const [filteredCharacters] = useState(filterCharacters(characters, "image"));
  const [hatCardPick] = useState(hatCard(filteredCharacters));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isPaused, setisPaused] = useState(true);
  const [isEndGame, setIsEndGame] = useState({
    status: false,
    remainingTime: null,
  });
  const [message, setMessage] = useState({
    category: "",
    response: `Greetings ${playerInfo.name} from ${playerInfo.house}! \n Will you be able to find the right card? \n Click on a hint to begin...`,
  });

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
              setIsEndGame={setIsEndGame}
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
            setIsEndGame={setIsEndGame}
            pauseTimer={pauseTimer}
          />
        )}
        {isEndGame.status && (
          <ModalEndGame
            selectedCard={selectedCard}
            hatCardPick={hatCardPick}
            playerInfo={playerInfo}
            remainingTime={isEndGame.remainingTime}
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
};

GamePage.defaultProps = {
  playerInfo: PropTypes.shape({
    name: "",
    house: "",
    score: null,
  }),
};
