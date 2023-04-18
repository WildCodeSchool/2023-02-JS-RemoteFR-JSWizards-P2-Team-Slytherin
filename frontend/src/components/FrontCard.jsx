import PropTypes from "prop-types";

export default function FrontCard({ name, image }) {
  const firstName = name.split(" ")[0].charAt(0);
  const lastName = name.split(" ")[1];
  const nameShort = `${firstName}. ${lastName}`;

  return (
    <div className="relative flex h-[160px] w-[112px] flex-col items-center gap-2 rounded-[6px] bg-[url('src/assets/img/card-front-background.png')] bg-cover py-2">
      <span className="font-baskerville text-sm">{nameShort}</span>
      <img
        src={image}
        alt={nameShort}
        className="absolute top-1/2 h-[76px] w-[61px] -translate-y-2/4 rounded-full object-cover"
      />
      <img
        src="src/assets/img/card-front-decoration.png"
        alt="golden frame decoration"
        className="absolute top-1/2 h-[93px] w-[81px] -translate-y-2/4"
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
