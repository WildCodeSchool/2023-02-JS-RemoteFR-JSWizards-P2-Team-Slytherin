import Layout from "@components/Layout";
import FrontCard from "@components/FrontCard";
import BackCard from "@components/BackCard";
import wizards from "../data/data.json";

function GamePage() {
  const wizard = wizards[4];
  return (
    <Layout>
      <FrontCard name={wizard.name} image={wizard.image} />
      <BackCard />
    </Layout>
  );
}

export default GamePage;
