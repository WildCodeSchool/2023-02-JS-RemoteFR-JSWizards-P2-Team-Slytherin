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
    <form className="flex flex-col gap-[48px]">
      <label htmlFor="user-name" className="form__label">
        Player Name
        <input
          placeholder=" Enter your Name..."
          className="form__input"
          id="user-name"
          name="name"
          type="text"
          value={playerInfo.name}
          onChange={handleNameChange}
        />
      </label>

      <label htmlFor="user-house" className="form__label">
        Wizard House
        <select
          className="form__input cursor-pointer appearance-none  bg-[url('../assets/icon/dropdown.svg')] bg-[center_right_2rem] bg-no-repeat"
          id="user-house"
          name="house"
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
      <div className="flex flex-row justify-between">
        <Link
          className="form__btn border-2 border-transparent bg-primary-darkest/80 text-neutral-lightest backdrop-blur-[4px] hover:border-primary-darkest hover:bg-neutral-lightest/80 hover:text-primary-darkest"
          to="/rules"
        >
          Rules
        </Link>

        <Link
          className="form__btn border-2 border-transparent bg-secondary-darkest/80 text-neutral-lightest backdrop-blur-[4px] hover:border-secondary-darkest hover:bg-neutral-lightest/80 hover:text-secondary-darkest"
          to="/game"
        >
          Play now
        </Link>
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
