import PropTypes from "prop-types";

export default function FrontCard({ name, image }) {
  const firstName = name.split(" ")[0].charAt(0);
  const lastName = name.split(" ")[1];
  const nameShort = `${firstName}. ${lastName}`;

  return (
    <div className="relative flex h-[88px] w-[60px] flex-col items-center rounded-[4px] bg-[url('src/assets/img/card-front-background.png')] bg-cover py-0.5 2xl:h-[160px] 2xl:w-[112px] 2xl:rounded-[6px] 2xl:py-2">
      <span className="font-baskerville text-2xs 2xl:text-sm">{nameShort}</span>
      <img
        src={image}
        alt={nameShort}
        className="absolute top-1/2 h-[42px] w-[33px] -translate-y-2/4 rounded-full object-cover 2xl:h-[76px] 2xl:w-[61px]"
      />
      <img
        src="src/assets/img/card-front-decoration.png"
        alt="golden frame decoration"
        className="absolute top-1/2 h-[51px] w-[43px] -translate-y-2/4 2xl:h-[93px] 2xl:w-[81px]"
      />
      <button type="button" className="absolute bottom-1 2xl:bottom-2">
        <img
          src="src/assets/img/card-front-validate.png"
          alt="golden snitch"
          className="h-[17px] w-[17px] 2xl:h-[32px] 2xl:w-[32px]"
        />
      </button>
    </div>
  );
}

FrontCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
