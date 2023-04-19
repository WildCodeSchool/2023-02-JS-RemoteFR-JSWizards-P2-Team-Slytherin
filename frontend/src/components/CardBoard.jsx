import TestCard from "./TestCard";
import "./CardBoard.css";

export default function CardBoard() {
  return (
    <div>
      <div className="flex">
        <div className="cardcontainer flex justify-center items-center flex-col text-center">
          <div className="content flex flex-wrap ">
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
          </div>
          <div className="content flex flex-wrap">
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
            <TestCard />
          </div>
          <div className="content flex flex-wrap">
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
    </div>
  );
}
