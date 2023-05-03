import PropTypes from "prop-types";

import clueList from "../data/clue_list.json";
import Clue from "./Clue";

export default function ClueList({ addMessage, decrementScore }) {
  const clues = clueList.slice(0, 6);

  return (
    <div className="flex w-fit flex-col gap-4">
      {clues.map((clue) => (
        <Clue
          key={clue.id}
          src={clue.src}
          alt={clue.alt}
          label={clue.label}
          category={clue.category}
          response={clue.response}
          addMessage={addMessage}
          decrementScore={decrementScore}
        />
      ))}
    </div>
  );
}

ClueList.propTypes = {
  addMessage: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
};
