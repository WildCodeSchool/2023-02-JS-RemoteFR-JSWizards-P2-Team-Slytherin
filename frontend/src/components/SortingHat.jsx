import PropTypes from "prop-types";
import formatMessage from "../helper/FormatMessage";

export default function SortingHat({ message, hatCardPick }) {
  return (
    <div className="relative w-full px-4">
      <div className="flex w-full items-center p-4">
        <img
          className="absolute -top-8 left-4 h-[200px] w-[198px] scale-x-[-1] scale-y-[1]"
          src="./assets/gif/sorting-hat.gif"
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
