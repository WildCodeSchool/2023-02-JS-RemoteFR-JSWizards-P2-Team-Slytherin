import { useState } from "react";

const ModalRulesNavBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button type="button">
        <img
          src="../assets/icon/rules.svg"
          alt="Game rules"
          className="h-[30px]"
          onClick={() => setShowModal(true)}
        />
      </button>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center outline-none focus:outline-none">
            {/*content*/}
            <div className=" relative flex w-full max-w-sm flex-col items-center outline-none focus:outline-none">
              {/*header*/}
              <img
                className="w-24"
                src="./assets/img/hogwarts-houses.png"
                alt="Hogwarts houses logo"
              />
              <h3 className="text-center font-ibarra text-lg">
                Welcome young wizard !
              </h3>
              {/*body*/}
              <div className="relative p-6">
                <p className="text-l my-4 text-center font-ibarra leading-relaxed text-black">
                  The goal is to find the character hidding behind the card of
                  the sorting hat. For that, a list of clues containing the
                  attributes of the character in question is available to help
                  you to make the right choices. But be careful, the time is
                  limited and the more time and clues you take, the less points
                  you have. <br />
                  When you want to eliminate a card, click on it to flip it. If
                  you think you know which card has the Sorting Hat, click on
                  the Golden snitch to verify the card and end the game.
                  <br /> Good Luckus Leviosa
                </p>
              </div>
              {/*footer*/}
            </div>
            <button
              className="fixed right-0 top-0"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <img
                className="inset-0 right-0 z-40 p-12 "
                src="./assets/icon/close.svg"
              />
            </button>
            <div className="fixed inset-y-80 end-52">
              <img
                className="inset-0 z-40 h-96 "
                src="./assets/img/ink-feather.png"
              />
            </div>
          </div>

          {/*backgrounds*/}
          <div className="fixed inset-0 z-30 bg-black opacity-70 "></div>
          <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm">
            <img
              className="h-5/6"
              src="./assets/img/background-parchment-rules.png"
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalRulesNavBar;
