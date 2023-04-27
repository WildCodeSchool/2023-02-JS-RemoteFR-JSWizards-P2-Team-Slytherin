import React, { useState, useEffect } from "react";
import FrontCard from "./FrontCard";
import wizards from "../data/data.json";

export default function CardBoard() {
  const [selectedWizard, setSelectedWizard] = useState(null);

  useEffect(() => {
    const visibleWizards = wizards
      .slice(0, 7)
      .concat(wizards.slice(8, 14))
      .concat(wizards.slice(15, 22));
    const randomIndex = Math.floor(Math.random() * visibleWizards.length);
    const randomWizard = visibleWizards[randomIndex];
    setSelectedWizard(randomWizard);
  }, []);

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
      {selectedWizard && (
        <p>Wizard sélectionné par le choixpeau : {selectedWizard.name}</p>
      )}
    </div>
  );
}
