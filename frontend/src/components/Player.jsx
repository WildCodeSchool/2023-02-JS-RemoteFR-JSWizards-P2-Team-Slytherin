import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Player() {
  const [fullName, setFullName] = useState("");
  const [houseChoice, setHouseChoice] = useState();

  const handleChangeFullName = (e) => setFullName(e.target.value);
  const handleSelectHouse = (e) => setHouseChoice(e.target.value);

  return (
    <div>
      <form>
        <label htmlFor="fullName">
          Player Name
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={handleChangeFullName}
          />
        </label>
        <label>
          Wizard House
          <select
            value={houseChoice}
            className="select"
            onChange={handleSelectHouse}
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
          </select>
        </label>
        <button type="button">
          <Link to="/rules">RULES</Link>
        </button>
        <button type="button">
          <Link to="/game">PLAY NOW</Link>
        </button>
      </form>
    </div>
  );
}
