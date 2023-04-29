import PropTypes from "prop-types";

export default function Clue({
  src,
  alt,
  label,
  category,
  response,
  addMessage,
}) {
  const handleButtonClick = () => {
    const newMessage = { category, response };
    addMessage(newMessage);
  };

  return (
    <div>
      <button
        type="button"
        className="flex h-[60px] w-[264px] items-center gap-8 rounded-[10px] bg-[radial-gradient(var(--tw-gradient-stops))] from-[#6A63A8] to-[#29264B] px-6 py-3 shadow-xl duration-300 ease-out active:scale-[0.98] active:shadow-sm"
        onClick={handleButtonClick}
      >
        <div className="img-wrapper flex h-8 w-[45px] justify-center ">
          <img src={src} alt={alt} />
        </div>
        <span className="font-ibarra text-lg text-neutral-lightest">
          {label}
        </span>
      </button>
    </div>
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
