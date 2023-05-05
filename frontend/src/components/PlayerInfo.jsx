import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import ModalRulesHome from "./ModalRulesHome";

export default function PlayerInfo({ updatePlayerInfo }) {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    name: "",
    house: "",
    score: null,
  });

  const handleSubmit = (event) => {
    // 1. prevent the page to be refreshed
    event.preventDefault();
    // 2. check player info before sending
    const newPlayer = { ...player };
    if (!player.name) newPlayer.name = "Dobby";
    if (!player.house) newPlayer.house = "unknown magic school";
    // 3. send all PlayerInfo to the parent App
    updatePlayerInfo(newPlayer);
    // 4. redirect to the GamePAge
    navigate("/game");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };

  return (
    <form className="flex flex-col gap-[48px]" onSubmit={handleSubmit}>
      <label htmlFor="username" className="form__label">
        Player Name
        <input
          className="form__input"
          id="username"
          name="name"
          type="text"
          placeholder="Enter your Name..."
          value={player.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="userhouse" className="form__label">
        Wizard House
        <select
          className="form__input cursor-pointer appearance-none  bg-[url('../assets/icon/dropdown.svg')] bg-[center_right_2rem] bg-no-repeat"
          id="userhouse"
          name="house"
          placeholder="Select your House..."
          value={player.house}
          onChange={handleChange}
        >
          <option value="">Select your House...</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </label>
      <div className="flex flex-row justify-between">
        <ModalRulesHome />

        <button
          type="submit"
          className="form__btn border-2 border-transparent bg-secondary-darkest/80 text-neutral-lightest backdrop-blur-[4px] hover:border-secondary-darkest hover:bg-neutral-lightest/80 hover:text-secondary-darkest"
        >
          Play now
        </button>
      </div>
    </form>
  );
}

PlayerInfo.propTypes = {
  updatePlayerInfo: PropTypes.func.isRequired,
};
