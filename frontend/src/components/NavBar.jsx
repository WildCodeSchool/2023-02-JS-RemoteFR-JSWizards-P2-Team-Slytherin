import { Link } from "react-router-dom";
import ModalRulesNavBar from "./ModalRulesNavBar";
import Music from "./Music";

export default function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <button type="button">
          <Link reloadDocument to="/">
            <img
              className="h-[68px] w-[180px]"
              src="../assets/logo/logo-desktop.png"
              alt="Return to homepage"
            />
          </Link>
        </button>
        <ul id="menu" className="flex items-center gap-10">
          <li>
            <ModalRulesNavBar />
          </li>
          <li>
            <button type="button">
              <Link to="/score">
                <img
                  src="../assets/icon/score.svg"
                  alt="Scores"
                  className="h-[30px]"
                />
              </Link>
            </button>
          </li>
          <li>
            <Music />
          </li>
        </ul>
      </nav>
    </header>
  );
}
