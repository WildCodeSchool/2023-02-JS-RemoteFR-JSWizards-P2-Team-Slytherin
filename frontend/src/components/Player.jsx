import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Player() {
  const [fullName, setFullName] = useState("");
  const [houseChoice, setHouseChoice] = useState();

  const handleChangeFullName = (e) => setFullName(e.target.value);
  const handleSelectHouse = (e) => setHouseChoice(e.target.value);

  return (
    <form className="flex h-[340px] w-[398px] flex-col">
      <div className="mb-12">
        <label className="font-ibarra text-lg text-neutral-lightest">
          Player Name
          <input
            placeholder=" Enter your Name..."
            className="mb-12 w-[400px] rounded-[48px] bg-neutral-lightest px-[48px] py-3 text-base text-secondary-dark opacity-75"
            id="fullName"
            type="text"
            value={fullName}
            onChange={handleChangeFullName}
          />
        </label>
        <label className="flex flex-col font-ibarra text-lg text-neutral-lightest ">
          Wizard House
          <select
            className="w-[400px] rounded-[48px] bg-neutral-lightest px-[48px] py-3 text-base text-secondary-dark opacity-75"
            value={houseChoice}
            onChange={handleSelectHouse}
          >
            <option className=" text-neutral-lightest" value="">
              {" "}
              Select your House...
            </option>
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
          className="h-[52px] w-[180px] rounded-[48px] border border-secondary-dark bg-neutral-lightest font-cinzel text-secondary-dark opacity-75"
        >
          <Link to="/rules">Rules</Link>
        </button>
        <button
          type="button"
          className="h-[52px] w-[180px] rounded-[48px] border border-neutral-lightest bg-secondary-dark font-cinzel text-neutral-lightest opacity-75"
        >
          <Link to="/game">Play now</Link>
        </button>
      </div>
    </form>
  );
}
