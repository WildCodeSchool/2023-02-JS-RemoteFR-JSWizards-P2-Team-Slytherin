import PropTypes from "prop-types";

import Card from "./Card";

export default function CardBoard({ characters }) {
  return (
    <div className="cardcontainer flex h-[510px] w-fit flex-wrap items-center justify-center gap-[5px] bg-transparent text-center ">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
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
};
