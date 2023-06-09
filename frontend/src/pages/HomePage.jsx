import PropTypes from "prop-types";

import Layout from "../components/Layout";
import PlayerInfo from "../components/PlayerInfo";

export default function HomePage({ updatePlayerInfo }) {
  return (
    <div className="bg-[url('../assets/img/background-welcome-screen-desktop.png')] bg-cover bg-left-bottom">
      <Layout>
        <div className="mb-[72px] mr-16 mt-[66px] flex flex-col">
          <h1 className="flex justify-end">Who Wiz It?</h1>
          <h2 className="flex justify-end font-ibarra text-xl text-neutral-light">
            Defeat the Sorting Hat
          </h2>
        </div>
        <div className="mr-16 flex justify-end">
          <PlayerInfo updatePlayerInfo={updatePlayerInfo} />
        </div>
      </Layout>
    </div>
  );
}

HomePage.propTypes = {
  updatePlayerInfo: PropTypes.func.isRequired,
};
