import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ModalCountDown = ({ timeBeforeGame }) => {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(timeBeforeGame);

  let countID = null;
  useEffect(() => {
    if (count > 0) {
      countID = setTimeout(() => setCount(count - 1), 1000);
    } else {
      clearTimeout(countID);
    }
    return function cleanUp() {
      clearInterval(countID);
    };
  }, [count]);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <img
          src="./assets/icon/rules.svg"
          alt="Game rules"
          className="h-[30px]"
        />
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden text-center font-cinzel text-4xl text-white outline-none backdrop-blur-sm focus:outline-none">
            <h2>
              The game will <br />
              begin in...
              <br />
              {count}
            </h2>

            <button
              className=" font-cinzel text-white"
              type="button"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalCountDown;
