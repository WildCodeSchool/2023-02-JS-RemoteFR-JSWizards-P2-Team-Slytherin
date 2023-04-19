import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar" className="flex justify-between items-center">
      <div>
        <button>
          <Link to="/">
            <img
              className="p-4 h-32"
              src="src/assets/logo/logo-desktop.png"
              alt="Return to homepage"
            />
          </Link>
        </button>
      </div>
      <ul id="menu" className="flex p-4 gap-5">
        <li>
          <button>
            <Link to="/rules">
              <img src="src/assets/icon/rules.svg" alt="Game rules" />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/score">
              <img src="src/assets/icon/score.svg" alt="Scores" />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <img src="src/assets/icon/sound-on.svg" alt="Sound on" />
          </button>
        </li>
        <li>
          <button>
            <Link to="/game">
              <img src="src/assets/icon/settings.svg" alt="Settings" />
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
