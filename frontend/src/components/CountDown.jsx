import { CountdownCircleTimer } from "react-countdown-circle-timer";

function CountDown() {
  return (
    <CountdownCircleTimer isPlaying duration={3} colors={["white"]}>
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}

export default CountDown;