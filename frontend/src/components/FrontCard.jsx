import PropTypes from "prop-types";

export default function FrontCard({ name, image }) {
  const firstName = name.split(" ")[0].charAt(0);
  const lastName = name.split(" ")[1];
  const nameShort = `${firstName}. ${lastName}`;

  return (
    <div className="relative flex h-[160px] w-[112px] flex-col items-center rounded-[6px] bg-[url('../assets/img/card-front-background.png')] bg-cover py-2">
      <span className="font-ibarra text-base">{nameShort}</span>
      <img
        src={image}
        alt={nameShort}
        className="absolute top-[55%] h-[98px] w-[79px] -translate-y-2/4 rounded-full object-cover"
      />
      <img
        src="../assets/img/card-front-decoration.png"
        alt="golden frame decoration"
        className="absolute top-[55%] h-[120px] w-[104px] -translate-y-2/4"
      />
      <button type="button" className="btn absolute bottom-1.5 right-0">
        <img
          src="../assets/img/card-front-validate.png"
          alt="golden snitch"
          className="btn-validate h-[32px] w-[32px]"
        />
      </button>
    </div>
  );
}

FrontCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
