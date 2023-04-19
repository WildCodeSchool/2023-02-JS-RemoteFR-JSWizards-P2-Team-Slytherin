import TestCard from "./TestCard";
import "./CardBoard.css";

export default function CardBoard() {
  return (
    <div>
      <div className="cardcontainer">
        <div className="cardcontainer1 flex flex-wrap ">
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
        <div className="container2 flex flex-wrap">
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
        <div className="container3 flex flex-wrap">
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </div>
    </div>
  );
}
