import { useState, useEffect } from "react";
import CountDown from "./CountDown";

function ModalCountDown() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 2800);
    }
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
