const NavBar = () => {
  return (
    <nav id="navbar" class="flex justify-between items-center">
      <div>
        <button>
          <a href="src/pages/Home.jsx">
            <img
              class="p-4"
              src="src/assets/logo/logo-desktop.png"
              alt="Return to homepage"
            />
          </a>
        </button>
      </div>
      <ul id="menu" class="flex p-4 gap-5">
        <li>
          <button>
            <a href="src/pages/RulesPage.jsx">
              <img src="src/assets/icon/rules.svg" alt="Game rules" />
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="src/pages/ScorePage.jsx">
              <img src="src/assets/icon/score.svg" alt="Scores" />
            </a>
          </button>
        </li>
        <li>
          <button>
            <img src="src/assets/icon/sound-on.svg" alt="Sound on" />
          </button>
        </li>
        <li>
          <button>
            <img src="src/assets/icon/settings.svg" alt="Settings" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
