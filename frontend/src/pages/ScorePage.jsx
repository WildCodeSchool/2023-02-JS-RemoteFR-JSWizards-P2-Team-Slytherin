import Layout from "../components/Layout";

function ScorePage() {
  return (
    <div className="bg-[url('./assets/img/background-welcome-screen-desktop.png')] bg-cover bg-left-bottom">
      <Layout>
        <div>
          <img
            src="./assets/img/flying-car-desktop.png"
            className=" absolute left-[50%] top-[33%] z-10 h-[120px] w-[169px] rotate-[-8deg]"
          />
          <h1 className="mr-[64px] mt-[84px] flex justify-end pb-4 font-cinzel text-4xl text-neutral-light">
            Best players
          </h1>
          <div className=" z-0 ml-auto mr-[64px] grid h-[346px] w-[536px] grid-cols-3 grid-rows-5 justify-items-center gap-1 rounded-xl pt-[25px] font-ibarra text-lg text-neutral-light backdrop-blur-sm">
            <div></div>
            <div className="font-cinzel text-xl">Player</div>
            <div className="font-cinzel text-xl">Score</div>
            <img src="./assets/icon/scorecupgold.svg" />
            <div>{localStorage.currentUsername}</div>
            <div>{localStorage.score} pts</div>
            <img src="./assets/icon/scorecupsilver.svg" />
            <div>Harry</div>
            <div>500 pts</div>
            <img src="./assets/icon/scorecupbronze.svg" />
            <div>Ron</div>
            <div>350 pts</div>
            <div></div>
            <div>Dobby</div>
            <div>200 pts</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ScorePage;
