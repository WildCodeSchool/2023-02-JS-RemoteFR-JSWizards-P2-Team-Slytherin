import { useState } from "react";
import PropTypes from "prop-types";

import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function Card({ name, image }) {
  const [showFront, setShowFront] = useState(true);

  const flipCardOnClick = (e) => {
    if (!e.target.className.includes("btn")) {
      setShowFront((prev) => !prev);
    }
  };

  return (
    <button
      type="button"
      className="card-container h-[160px] w-[112px] cursor-[url('../assets/icon/flip-cursor.svg'),_pointer] duration-300 ease-in-out perspective hover:-translate-y-1 hover:drop-shadow-xl"
      onClick={flipCardOnClick}
    >
      <div
        className={`card relative h-[160px] w-[112px] duration-500 preserve-3d ${
          showFront ? "my-rotate-180" : ""
        }`}
      >
        <div className="card-front absolute my-rotate-180 backface-hidden">
          <FrontCard name={name} image={image} />
        </div>
        <div className="card-back absolute backface-hidden">
          <BackCard />
        </div>
      </div>
    </button>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
