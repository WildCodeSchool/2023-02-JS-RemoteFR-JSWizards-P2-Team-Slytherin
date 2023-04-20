import Layout from "@components/Layout";
import SortingHat from "@components/SortingHat";
import CardBoard from "../components/CardBoard";
import Score from "../components/Score";
import Timer from "../components/Timer";

function GamePage() {
  return (
    <Layout>
      <div
        className="Timescore"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Timer />
        <Score />
      </div>
      <SortingHat />
      <div style={{ marginLeft: "40px" }}>
        <CardBoard />
      </div>
    </Layout>
  );
}

export default GamePage;
