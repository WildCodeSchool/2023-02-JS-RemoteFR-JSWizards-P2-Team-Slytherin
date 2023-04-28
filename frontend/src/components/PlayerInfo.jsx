import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function PlayerInfo({ playerInfo, setPlayerInfo }) {
  const handleNameChange = (e) => {
    const newName = { name: e.target.value };
    setPlayerInfo((user) => ({ ...user, ...newName }));
  };

  const handleChangeHouse = (e) => {
    const newHouse = { house: e.target.value };
    setPlayerInfo((user) => ({ ...user, ...newHouse }));
  };

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
            value={playerInfo.name}
            onChange={handleNameChange}
          />
        </label>
        <label className="flex flex-col font-ibarra text-lg text-neutral-lightest ">
          Wizard House
          <select
            className="h-[52px] w-[400px] cursor-pointer appearance-none rounded-full bg-neutral-lightest/75 bg-[url('../assets/icon/dropdown.svg')] bg-[center_right_2rem] bg-no-repeat px-[48px] py-3 text-base text-neutral-lightest backdrop-blur-sm placeholder:text-neutral-lightest"
            value={playerInfo.house}
            onChange={handleChangeHouse}
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

PlayerInfo.propTypes = {
  playerInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
  setPlayerInfo: PropTypes.func.isRequired,
};
