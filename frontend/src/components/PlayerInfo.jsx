import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PlayerInfo() {
  const [fullName, setFullName] = useState("");
  const [houseChoice, setHouseChoice] = useState();

  const handleChangeFullName = (e) => setFullName(e.target.value);
  const handleSelectHouse = (e) => setHouseChoice(e.target.value);

  return (
    <form className="flex w-[398px] flex-col gap-[48px]">
      <div className="flex flex-col gap-[48px]">
        <label className="font-ibarra text-lg text-neutral-lightest">
          Player Name
          <input
            placeholder=" Enter your Name..."
            className="h-[52px] w-[400px] rounded-full bg-neutral-lightest/75 px-[48px] py-3 text-base text-neutral-lightest backdrop-blur-sm placeholder:text-neutral-lightest"
            id="fullName"
            type="text"
            value={fullName}
            onChange={handleChangeFullName}
          />
        </label>
        <label className="flex flex-col font-ibarra text-lg text-neutral-lightest ">
          Wizard House
          <select
            className="h-[52px] w-[400px] rounded-full bg-neutral-lightest/75 px-[48px] py-3 text-base text-neutral-lightest backdrop-blur-sm placeholder:text-neutral-lightest"
            value={houseChoice}
            onChange={handleSelectHouse}
          >
            <option value="">Select your House...</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
          </select>
        </label>
      </div>
      <div className="flex flex-row justify-between">
        <button
          type="button"
          className="w-[180px] rounded-full bg-neutral-lightest/75 py-3 font-cinzel text-base text-secondary-dark hover:bg-secondary-dark/75 hover:text-neutral-lightest"
        >
          <Link to="/rules">Rules</Link>
        </button>
        <button
          type="button"
          className="w-[180px] rounded-full bg-secondary-dark/75 py-3 font-cinzel text-base text-neutral-lightest hover:bg-neutral-lightest/75 hover:text-secondary-dark"
        >
          <Link to="/game">Play now</Link>
        </button>
      </div>
    </form>
  );
}
