import { useState } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SortingHat from "../components/SortingHat";
import CardBoard from "../components/CardBoard";
import Score from "../components/Score";
import Timer from "../components/Timer";
import BackCard from "../components/BackCard";
import ClueList from "../components/ClueList";
import ModalCountDown from "../components/ModalCountDown";

import filterCharacters from "../helper/filterCharacters";
import hatCard from "../helper/pickHatCard";

export default function GamePage({ characters, playerInfo }) {
  const gameDuration = 60;
  const scoreStart = 1200;

  const [score, setScore] = useState(scoreStart);
  const [filteredCharacters] = useState(filterCharacters(characters, "image"));
  const [hatCardPick] = useState(hatCard(filteredCharacters));
  const [message, setMessage] = useState({
    category: "",
    response: `Greetings ${playerInfo.name} from ${playerInfo.house}! \n Will you be able to find the right card? \n Click on a hint to begin...`,
  });

  const addMessage = (newMessage) => setMessage(newMessage);
  const zeroScore = () => setScore(0);
  const decrementScore = (val) => {
    if (val < score) return setScore((prevScore) => prevScore - val);
    return zeroScore();
  };

  return (
    <div className="bg-[url('../assets/img/background-game-screen-desktop.png')] bg-cover">
      <Layout>
        <div className="layout-wrapper grid min-h-full grid-rows-[auto_1fr] justify-items-center">
          <div className="relative -top-7 mx-auto flex justify-center gap-16">
            <ModalCountDown />
            <Timer
              gameDuration={gameDuration}
              decrementScore={decrementScore}
              zeroScore={zeroScore}
            />
            <Score score={score} />
          </div>
          <div className="relative -top-3 grid min-h-full w-full grid-cols-[2fr_minmax(auto,1fr)] place-items-center">
            <SortingHat
              message={message}
              hatCardPick={hatCardPick}
              playerInfo={playerInfo}
            />
            <BackCard />
            <CardBoard characters={filteredCharacters} />
            <ClueList addMessage={addMessage} decrementScore={decrementScore} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

GamePage.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  playerInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
};
