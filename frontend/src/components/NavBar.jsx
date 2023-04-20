import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <button type="button">
          <Link to="/">
            <img
              className="h-[68px] w-[180px]"
              src="src/assets/logo/logo-desktop.png"
              alt="Return to homepage"
            />
          </Link>
        </button>
        <ul id="menu" className="flex items-center gap-10">
          <li>
            <button type="button">
              <Link to="/rules">
                <img
                  src="src/assets/icon/rules.svg"
                  alt="Game rules"
                  className="h-[30px]"
                />
              </Link>
            </button>
          </li>
          <li>
            <button type="button">
              <Link to="/score">
                <img
                  src="src/assets/icon/score.svg"
                  alt="Scores"
                  className="h-[30px]"
                />
              </Link>
            </button>
          </li>
          <li>
            <button type="button">
              <img
                src="src/assets/icon/sound-on.svg"
                alt="Sound on"
                className="h-[30px]"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
