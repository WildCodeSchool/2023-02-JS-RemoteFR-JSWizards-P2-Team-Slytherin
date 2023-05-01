import { useState, useEffect } from "react";
import CountDown from "./CountDown";

const ModalCountDown = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setCount(timeBeforeGame);
    }, 1000);
  }, []);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 2900);
    }
  }, [showModal]);

  return (
    <>
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
          <div className="fixed inset-0 z-40 bg-black opacity-70"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalCountDown;
