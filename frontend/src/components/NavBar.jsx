import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div>
          <button type="button">
            <Link to="/">
              <img
                className="h-32 p-4"
                src="src/assets/logo/logo-desktop.png"
                alt="Return to homepage"
              />
            </Link>
          </button>
        </div>
        <ul id="menu" className="flex gap-5 p-4">
          <li>
            <button type="button">
              <Link to="/rules">
                <img src="src/assets/icon/rules.svg" alt="Game rules" />
              </Link>
            </button>
          </li>
          <li>
            <button type="button">
              <Link to="/score">
                <img src="src/assets/icon/score.svg" alt="Scores" />
              </Link>
            </button>
          </li>
          <li>
            <button type="button">
              <img src="src/assets/icon/sound-on.svg" alt="Sound on" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
