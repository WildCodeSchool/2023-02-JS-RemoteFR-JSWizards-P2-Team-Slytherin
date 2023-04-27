import PropTypes from "prop-types";

import FrontCard from "./FrontCard";

export default function CardBoard({ characters }) {
  return (
    <div>
      <div className="flex">
        <div className="cardcontainer flex h-[510px] w-fit flex-col items-center justify-center gap-[5px] bg-transparent text-center ">
          <div className="content flex flex-wrap gap-[5px] ">
            {characters.slice(0, 7).map((character) => (
              <FrontCard
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
          <div className="content flex flex-wrap gap-[5px]">
            {characters.slice(7, 13).map((character) => (
              <FrontCard
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
          <div className="content flex flex-wrap gap-[5px]">
            {characters.slice(13, 21).map((character) => (
              <FrontCard
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </div>
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
