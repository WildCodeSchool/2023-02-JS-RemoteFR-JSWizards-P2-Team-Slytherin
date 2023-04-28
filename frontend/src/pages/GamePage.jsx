import PropTypes from "prop-types";

import Layout from "../components/Layout";
import SortingHat from "../components/SortingHat";
import CardBoard from "../components/CardBoard";
import Score from "../components/Score";
import Timer from "../components/Timer";
import BackCard from "../components/BackCard";
import ClueList from "../components/ClueList";
import filterCharacters from "../helper/filterCharacters";
import ModalCountDown from "../components/ModalCountDown";
// import hatCard from "../helper/hatCard"; wil be used in a futur composant

function GamePage({ characters }) {
  const gameDuration = 60;
  const scoreStart = 1000;
  const timeLeft = 3;
  const filteredCharacters = filterCharacters(characters, "image");
  // const hatCardPick = hatCard(filteredCharacters); wil be used in a futur composant

  return (
    <div className="bg-[url('./assets/img/background-game-screen-desktop.png')] bg-cover">
      <Layout>
        <div className="layout-wrapper grid min-h-full grid-rows-[auto_1fr] justify-items-center">
          <div className="relative -top-7 mx-auto flex justify-center gap-16">
            <ModalCountDown timeBeforeGame={timeLeft} />
            <Timer gameTime={gameDuration} />
            <Score startingScore={scoreStart} />
          </div>

          <div className="relative -top-3 grid min-h-full w-full grid-cols-[2fr_minmax(auto,1fr)] place-items-center">
            <SortingHat />
            <BackCard />
            <CardBoard characters={filteredCharacters} />
            <ClueList />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default GamePage;

GamePage.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
