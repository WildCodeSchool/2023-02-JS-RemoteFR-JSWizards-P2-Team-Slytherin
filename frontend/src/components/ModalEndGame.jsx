import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import EndGameCard from "./EndGameCard";
import checkEndGame from "../helper/checkEndGame";

export default function ModalEndGame({
  selectedCard,
  hatCardPick,
  playerInfo,
  remainingTime,
}) {
  const { name: playerCardName, image: playerCardImage } = selectedCard;
  const { name: hatCardName, image: hatCardImage } = hatCardPick;
  const { name: playerName } = playerInfo;

  const { status, heading, message } = checkEndGame(
    playerCardName,
    hatCardName,
    playerName,
    remainingTime
  );

  return (
    <div
      className={`"modal-overlay fixed inset-0 flex items-center justify-center rounded-lg bg-neutral-darkest/75 text-center font-ibarra text-lg text-neutral-lightest backdrop-blur-lg ${
        heading.toLowerCase().includes("win")
          ? "bg-[url('../assets/img/background-endgame-confetti.png')] bg-cover "
          : ""
      }`}
    >
      <div className="content-wrapper flex flex-col items-center justify-center gap-16 px-4 py-2">
        <h1 className="font-cinzel text-3xl">{heading}</h1>
        <h2 className="font-cinzel text-lg">{message}</h2>

        {/* display cards only if not game over */}
        {status ? (
          <div className="flex items-center gap-32">
            <div className="flex flex-col gap-4">
              <EndGameCard name={playerCardName} image={playerCardImage} />
              <p>Your Card</p>
            </div>
            <img
              src={
                heading.toLowerCase().includes("win")
                  ? "../assets/img/background-endgame-victory.png"
                  : "../assets/img/background-endgame-loose.png"
              }
              alt="victory"
              className="h-[376] w-[243px]"
            />
            <div className="flex flex-col gap-4">
              <EndGameCard name={hatCardName} image={hatCardImage} />
              <p>Sorting Hat</p>
            </div>
          </div>
        ) : null}

        <div className="flex flex-row gap-10">
          <Link
            className="form__btn border-2 border-transparent bg-secondary-darkest/80 text-neutral-lightest backdrop-blur-[4px] hover:border-secondary-darkest hover:bg-neutral-lightest/80 hover:text-secondary-darkest"
            to="/score"
          >
            Scores
          </Link>
          <Link
            reloadDocument
            className="form__btn border-2 border-transparent bg-primary-darkest/80 text-neutral-lightest backdrop-blur-[4px] hover:border-primary-darkest hover:bg-neutral-lightest/80 hover:text-primary-darkest"
            to="/game"
          >
            Play again
          </Link>
        </div>
      </div>
    </div>
  );
}

ModalEndGame.propTypes = {
  selectedCard: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  hatCardPick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  playerInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
  remainingTime: PropTypes.number,
};

ModalEndGame.defaultProps = {
  remainingTime: null,
  selectedCard: null,
};
