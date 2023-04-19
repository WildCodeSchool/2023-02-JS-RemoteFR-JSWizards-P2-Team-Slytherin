import FrontCard from "./FrontCard";
import "./CardBoard.css";

export default function CardBoard() {
  return (
    <div>
      <div className="flex">
        <div className="cardcontainer flex justify-center items-center flex-col text-center">
          <div className="content flex flex-wrap ">
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
          </div>
          <div className="content flex flex-wrap">
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
          </div>
          <div className="content flex flex-wrap">
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
          </div>
        </div>
      </div>
    </div>
  );
}
