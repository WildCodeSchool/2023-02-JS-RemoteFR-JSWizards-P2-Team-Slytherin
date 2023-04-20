import PropTypes from "prop-types";

export default function Clue({ src, alt, nameClue }) {
  return (
    <button
      type="button"
      className="flex h-[60px] w-[264px] items-center gap-8 rounded-[10px] bg-[radial-gradient(var(--tw-gradient-stops))] from-primary-light to-primary-dark px-6 py-3"
    >
      <div className="img-wrapper flex h-8 w-[45px] justify-center ">
        <img src={src} alt={alt} />
      </div>
      <span className="font-ibarra text-lg text-neutral-lightest">
        {nameClue}
      </span>
    </button>
  );
}

Clue.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  nameClue: PropTypes.string.isRequired,
};
