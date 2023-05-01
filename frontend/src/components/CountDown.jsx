import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountDown = () => (
  <CountdownCircleTimer isPlaying duration={3} colors={["white"]}>
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default CountDown;
