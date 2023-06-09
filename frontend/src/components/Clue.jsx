import { useState } from "react";
import PropTypes from "prop-types";

export default function Clue({
  src,
  alt,
  label,
  category,
  response,
  addMessage,
  decrementScore,
}) {
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const handleClick = () => {
    // 1. change button styling (already clicked)
    setAlreadyClicked(true);

    // 2. send message related to the clicked clue to the dialog box with
    const newMessage = { category, response };
    addMessage(newMessage);

    // 3. decrement score
    decrementScore(100);
  };

  return (
    <button
      type="button"
      className={`flex h-[60px] w-[264px] items-center gap-8 rounded-[10px] border border-transparent bg-[radial-gradient(var(--tw-gradient-stops))] from-[#6A63A8] to-[#29264B] px-6 py-3 shadow-xl duration-300 ease-out active:scale-[0.97] active:shadow-sm ${
        alreadyClicked ? "opacity-50" : "hover:border-neutral-light"
      }`}
      onClick={handleClick}
    >
      <div className="icon-wrapper flex h-8 w-[45px] justify-center">
        <img src={src} alt={alt} />
      </div>
      <span className="font-ibarra text-lg text-neutral-lightest">{label}</span>
    </button>
  );
}

Clue.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
};
