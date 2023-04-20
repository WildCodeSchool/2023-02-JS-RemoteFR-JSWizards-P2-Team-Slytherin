import clueList from "../data/clue_list.json";
import Clue from "./Clue";

export default function ClueList() {
  const clues = clueList.slice(0, 6);

  return (
    <div className="flex w-fit flex-col gap-4">
      {clues.map((clue) => (
        <Clue
          key={clue.id}
          src={clue.src}
          alt={clue.alt}
          nameClue={clue.nameClue}
        />
      ))}
    </div>
  );
}
