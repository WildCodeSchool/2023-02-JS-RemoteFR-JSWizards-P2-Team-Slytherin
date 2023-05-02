import PropTypes from "prop-types";

import Card from "./Card";

export default function CardBoard({ characters, handleModal, selectCard }) {
  return (
    <div className="cardcontainer flex h-[510px] w-fit flex-wrap items-center justify-center gap-[5px] bg-transparent text-center ">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
          handleModal={handleModal}
          selectCard={selectCard}
        />
      ))}
    </div>
  );
}

CardBoard.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleModal: PropTypes.func.isRequired,
  selectCard: PropTypes.func.isRequired,
};
