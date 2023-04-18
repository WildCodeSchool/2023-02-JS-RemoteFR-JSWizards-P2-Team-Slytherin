const NavBar = () => {
  return (
    <nav id="navbar" class="flex justify-between items-center">
      <div>
        <img
          className="Logo-hp"
          src="src/assets/logo/logo-desktop.png"
          alt="Return to homepage"
        />
      </div>
      <ul id="menu" class="flex">
        <li>
          <img src="src/assets/icon/rules.svg" alt="Game rules" />
        </li>
        <li>
          <img src="src/assets/icon/score.svg" alt="Scores" />
        </li>
        <li>
          <img src="src/assets/icon/sound-on.svg" alt="Sound on" />
        </li>
        <li>
          <img src="src/assets/icon/settings.svg" alt="Settings" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
