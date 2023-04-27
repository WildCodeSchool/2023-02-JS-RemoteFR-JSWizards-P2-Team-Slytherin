import Layout from "../components/Layout";
import ModalCountDown from "../components/ModalCountDown";

export default function Home() {
  const timeLeft = 4;
  return (
    <Layout>
      <div>
        <h1>Who Wiz it?</h1>
        <ModalCountDown timeBeforeGame={timeLeft} />
      </div>
    </Layout>
  );
}
