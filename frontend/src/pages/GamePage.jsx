import { useState } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SortingHat from "../components/SortingHat";
import CardBoard from "../components/CardBoard";
import Score from "../components/Score";
import Timer from "../components/Timer";
import BackCard from "../components/BackCard";
import ClueList from "../components/ClueList";
import ModalConfirmCard from "../components/ModalConfirmCard";

import filterCharacters from "../helper/filterCharacters";
import hatCard from "../helper/pickHatCard";

export default function GamePage({ characters, playerInfo }) {
  /**
   * CONSTANTS
   */
  const gameDuration = 60;
  const scoreStart = 1000;

  /**
   * STATES
   */
  const [filteredCharacters] = useState(filterCharacters(characters, "image"));
  const [hatCardPick] = useState(hatCard(filteredCharacters));
  // CURENTLY TESTING
  const [openModal, setOpenModal] = useState(false);
  // CURENTLY TESTING
  const [selectedCard, setSelectedCard] = useState("");
  const [message, setMessage] = useState({
    category: "",
    response: `Greetings ${playerInfo.name} from ${playerInfo.house}! \n Will you be able to find the right card? \n Click on a hint to begin...`,
  });

  /**
   * FUNCTIONS
   */
  const addMessage = (newMessage) => setMessage(newMessage);

  // CURENTLY TESTING
  const selectCard = (name) => setSelectedCard(name);

  // CURENTLY TESTING
  // const handleModal = (name, isOpen) => {
  const handleModal = (isOpen) => {
    setOpenModal(isOpen);
    // setSelectedCard(name);
  };

  /**
   * PAGE CONTENT
   */
  return (
    <div className="bg-[url('../assets/img/background-game-screen-desktop.png')] bg-cover">
      <Layout>
        <div className="layout-wrapper grid min-h-full grid-rows-[auto_1fr] justify-items-center">
          <div className="relative -top-7 mx-auto flex justify-center gap-16">
            <Timer gameTime={gameDuration} />
            <Score startingScore={scoreStart} />
          </div>
          <div className="relative -top-3 grid min-h-full w-full grid-cols-[2fr_minmax(auto,1fr)] place-items-center">
            <SortingHat
              message={message}
              hatCardPick={hatCardPick}
              playerInfo={playerInfo}
            />
            <BackCard />
            <CardBoard
              characters={filteredCharacters}
              handleModal={handleModal}
              selectCard={selectCard}
            />
            <ClueList addMessage={addMessage} />
          </div>
        </div>

        {/* CURRENTLY TESTING */}
        {openModal && (
          <ModalConfirmCard
            selectedCard={selectedCard}
            handleModal={handleModal}
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
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
};
