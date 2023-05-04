import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CountDown from "./CountDown";

function ModalCountDown({ pauseTimer }) {
  const [showModal, setShowModal] = useState(true);
  let timeoutID = null;

  useEffect(() => {
    if (showModal) {
      timeoutID = setTimeout(() => {
        setShowModal(false);
      }, 2999);
    }
    return function cleanUp() {
      clearTimeout(timeoutID);
    };
  }, []);

  useEffect(() => {
    if (!showModal) pauseTimer();
  }, [showModal]);

  return (
    <div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden text-center font-cinzel text-4xl text-white outline-none backdrop-blur-sm focus:outline-none">
            <h2>
              The game will <br />
              begin in...
              <br />
              <div className="flex justify-center p-24">
                <CountDown />
              </div>
            </h2>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-70" />
        </>
      ) : null}
    </div>
  );
}

export default ModalCountDown;

ModalCountDown.propTypes = {
  pauseTimer: PropTypes.func.isRequired,
};
