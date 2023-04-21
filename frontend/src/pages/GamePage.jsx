import Layout from "../components/Layout";
import SortingHat from "../components/SortingHat";
import CardBoard from "../components/CardBoard";
import Score from "../components/Score";
import Timer from "../components/Timer";
import BackCard from "../components/BackCard";
import ClueList from "../components/ClueList";

function GamePage() {
  const gameDuration = 60;
  const scoreStart = 1000;
  return (
    <div className="bg-[url('src/assets/img/background-game-screen-desktop.png')] bg-cover">
      <Layout>
        <div className="layout-wrapper grid min-h-full grid-rows-[auto_1fr] justify-items-center">
          <div className="relative -top-7 mx-auto flex justify-center gap-16">
            <Timer gameTime={gameDuration} />
            <Score startingScore={scoreStart} />
          </div>
          {/* <div className="grid grid-cols-[1fr_minmax(auto,300px)] grid-rows-[auto_1fr] place-items-center"> */}
          <div className="relative -top-3 grid min-h-full w-full grid-cols-[2fr_minmax(auto,1fr)] place-items-center">
            <SortingHat />
            <BackCard />
            <CardBoard />
            <ClueList />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default GamePage;
