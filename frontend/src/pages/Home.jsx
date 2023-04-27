import Layout from "../components/Layout";
import Player from "../components/Player";

export default function Home() {
  return (
    <div className="bg-[url('./assets/img/background-welcome-screen-desktop.png')] bg-cover bg-left-bottom">
      <Layout>
        <div className="mb-[72px] mr-16 mt-[66px] flex flex-col">
          <h1 className="flex justify-end">Who Wiz It?</h1>
          <h2 className="flex justify-end font-ibarra text-xl text-neutral-light">
            Defeat the Sorting Hat
          </h2>
        </div>
        <div className="mr-16 flex justify-end">
          <Player />
        </div>
      </Layout>
    </div>
  );
}
