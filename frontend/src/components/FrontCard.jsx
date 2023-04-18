import PropTypes from "prop-types";

export default function FrontCard({ name, image }) {
  return (
    <div className="relative flex flex-col items-center px-3.5 py-2 gap-2 w-[112px] h-[160px] rounded-[6px] bg-[url('src/assets/img/card-front-background.png')]">
      <span className="font-baskerville text-caption">{name}</span>
      <img
        src={image}
        alt={name}
        className="w-[61px] h-[76px] rounded-full object-cover"
      />
      <img
        src="src/assets/img/card-front-decoration.png"
        alt="golden frame decoration"
        className="absolute top-6 w-[81px] h-[93px]"
      />
      <button type="button" className="absolute bottom-2">
        <img
          src="src/assets/img/card-front-validate.png"
          alt="golden snitch"
          className="w-[32px] h-[32px]"
        />
      </button>
    </div>
  );
}

FrontCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
