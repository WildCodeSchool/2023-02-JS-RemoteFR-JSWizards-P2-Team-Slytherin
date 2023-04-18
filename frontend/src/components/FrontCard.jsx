import PropTypes from "prop-types";

export default function FrontCard({ name, image }) {
  return (
    <div className="relative flex h-[160px] w-[112px] flex-col items-center gap-2 rounded-[6px] bg-[url('src/assets/img/card-front-background.png')] px-3.5 py-2">
      <span className="text-caption font-baskerville">{name}</span>
      <img
        src={image}
        alt={name}
        className="h-[76px] w-[61px] rounded-full object-cover"
      />
      <img
        src="src/assets/img/card-front-decoration.png"
        alt="golden frame decoration"
        className="absolute top-6 h-[93px] w-[81px]"
      />
      <button type="button" className="absolute bottom-2">
        <img
          src="src/assets/img/card-front-validate.png"
          alt="golden snitch"
          className="h-[32px] w-[32px]"
        />
      </button>
    </div>
  );
}

FrontCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
