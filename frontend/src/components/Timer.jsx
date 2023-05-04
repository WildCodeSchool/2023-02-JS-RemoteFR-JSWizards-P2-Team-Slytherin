/**
 * @desc The Timer component counts down from the input gameTime to 0
 * @input gameTime must be a number in seconds
 */

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import displayTime from "../helper/displayTime";

export default function Timer({
  gameDuration,
  decrementScore,
  zeroScore,
  setIsEndGame
  }) {
  let timerID = null;
  const [timer, setTimer] = useState(gameDuration);

  useEffect(() => {
    if (timer > 0) {
      timerID = setTimeout(() => {
        setTimer(timer - 1);
        decrementScore(10);
      }, 1000);
    } else {
      // trigger endgame screen
      setIsEndGame((prev) => ({ ...prev, status: true, remainingTime: timer }));
      // reset score
      zeroScore();
      // clear timer
      clearTimeout(timerID);
    }
    return function cleanUp() {
      clearInterval(timerID);
    };
  }, [timer]);

  return (
    <div className="flex w-fit min-w-[180px] items-center gap-x-3 rounded-full border-2 border-neutral-light px-8 py-2">
      <div className="img-wrapper">
        <svg
          width="40"
          height="55"
          viewBox="0 0 40 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-[22px]"
        >
          <path
            d="M5.00974 3.33325H34.5901C35.7001 3.33325 36.6 4.23311 36.6 5.34311C36.6 11.7397 34.059 17.8743 29.5359 22.3973L26.6098 25.3235C26.3193 25.6139 26.174 25.7593 26.07 25.8988C25.4355 26.7498 25.4355 27.9167 26.07 28.7677C26.174 28.9072 26.3193 29.0526 26.6098 29.343L29.5359 32.2691C34.059 36.7921 36.6 42.9268 36.6 49.3235C36.6 50.4335 35.7001 51.3333 34.5901 51.3333H5.00974C3.89974 51.3333 2.99998 50.4335 2.99998 49.3235C2.99998 42.9268 5.5411 36.7921 10.0641 32.2691L12.9902 29.343C13.2806 29.0526 13.4261 28.9072 13.53 28.7677C14.1645 27.9167 14.1645 26.7498 13.53 25.8988C13.4261 25.7593 13.2806 25.6139 12.9902 25.3235L10.0641 22.3973C5.5411 17.8743 2.99998 11.7397 2.99998 5.34311C2.99998 4.23311 3.89974 3.33325 5.00974 3.33325Z"
            stroke="#D9D9D9"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className="font-ibarra text-lg text-neutral-light">
        {displayTime(timer)[0]} : {displayTime(timer)[1]}
      </span>
    </div>
  );
}

Timer.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  decrementScore: PropTypes.func.isRequired,
  zeroScore: PropTypes.func.isRequired,
  setIsEndGame: PropTypes.func.isRequired,
};
