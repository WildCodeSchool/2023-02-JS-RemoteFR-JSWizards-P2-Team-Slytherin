import PropTypes from "prop-types";
import formatMessage from "../helper/FormatMessage";

export default function SortingHat({ message, hatCardPick }) {
  return (
    <div className="relative w-full px-4">
      <div className="flex w-full items-center p-4">
        <img
          className="absolute left-4 top-0 h-[146px] w-[198px]"
          src="./assets/img/sorting-hat.png"
          alt="Sorting hat"
        />
        <div className="flex h-[134px] w-[814px] items-center rounded-3xl bg-neutral-lightest px-2.5 pr-2">
          <h2 className="grow whitespace-pre-line text-center font-ibarra text-lg text-neutral-dark">
            {formatMessage(message, hatCardPick)}
          </h2>
        </div>
      </div>
    </div>
  );
}

SortingHat.propTypes = {
  message: PropTypes.shape({
    category: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }).isRequired,
  hatCardPick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
