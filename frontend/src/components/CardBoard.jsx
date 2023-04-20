import FrontCard from "./FrontCard";
import wizards from "../data/data.json";

export default function CardBoard() {
  return (
    <div>
      <div className="flex">
        <div className="cardcontainer flex h-[510px] w-fit flex-col items-center justify-center gap-[5px] bg-transparent text-center ">
          <div className="content flex flex-wrap gap-[5px] ">
            {wizards.slice(0, 7).map((wizard) => (
              <FrontCard
                key={wizard.id}
                name={wizard.name}
                image={wizard.image}
              />
            ))}
          </div>
          <div className="content flex flex-wrap gap-[5px]">
            {wizards.slice(8, 14).map((wizard) => (
              <FrontCard
                key={wizard.id}
                name={wizard.name}
                image={wizard.image}
              />
            ))}
          </div>
          <div className="content flex flex-wrap gap-[5px]">
            {wizards.slice(15, 22).map((wizard) => (
              <FrontCard
                key={wizard.id}
                name={wizard.name}
                image={wizard.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
