import PropTypes from "prop-types";

import shortenName from "../helper/shortenName";

export default function EndGameCard({ name, image }) {
  const nameShort = shortenName(name);

  return (
    <div className="relative flex h-[304px] w-[213px] flex-col items-center rounded-[6px] bg-[url('../assets/img/card-front-background.png')] bg-cover py-2">
      <span className="mt-2 font-ibarra text-lg text-neutral-darkest">
        {nameShort}
      </span>
      <img
        src={image}
        alt={name}
        className="absolute top-[55%] h-[187px] w-[150px] -translate-y-2/4 rounded-full object-cover"
      />
      <img
        src="../assets/img/card-front-decoration.png"
        alt="golden frame decoration"
        className="absolute top-[55%] h-[228px] w-[198px] -translate-y-2/4"
      />
    </div>
  );
}

EndGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
