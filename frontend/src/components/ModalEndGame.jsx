import PropTypes from "prop-types";

import FrontCard from "./FrontCard";

export default function ModalEndGame({ selectedCard }) {
  const { name, image } = selectedCard;
  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center rounded-lg bg-neutral-darkest/75 text-center font-ibarra text-lg text-neutral-lightest backdrop-blur-lg">
      <div className="content-wrapper flex flex-col items-center justify-center gap-2 px-4 py-2">
        <p>Display Results here...</p>

        <FrontCard name={name} image={image} />

        <div className="mt-2 flex gap-16">
          <button type="button">Play Again</button>
          <button type="button">Go to Scores</button>
        </div>
      </div>
    </div>
  );
}

ModalEndGame.propTypes = {
  selectedCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
