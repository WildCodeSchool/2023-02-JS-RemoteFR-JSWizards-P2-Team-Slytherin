import { useState } from "react";
import PropTypes from "prop-types";

export default function Clue({
  src,
  alt,
  label,
  category,
  response,
  addMessage,
}) {
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const handleClick = () => {
    // 1. Change button styling (already clicked)
    setAlreadyClicked(true);

    // 2. Send message related to the clicked clue to the dialog box with
    const newMessage = { category, response };
    addMessage(newMessage);
  };

  return (
    <button
      type="button"
      className={`flex h-[60px] w-[264px] items-center gap-8 rounded-[10px] border border-transparent px-6 py-3 shadow-xl duration-300 ease-out active:scale-[0.97] active:shadow-sm ${
        alreadyClicked
          ? ""
          : "to-[#29264B]} bg-[radial-gradient(var(--tw-gradient-stops))] from-[#6A63A8]"
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
};
