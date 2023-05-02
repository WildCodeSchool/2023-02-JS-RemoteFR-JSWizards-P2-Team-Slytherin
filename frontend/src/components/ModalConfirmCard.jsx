// import { useState } from "react";
import PropTypes from "prop-types";

export default function Modal({ selectedCard, handleModal }) {
  const handleClickConfirm = () => {
    handleModal(false);
    // trigger end game...
  };

  const handleClickCancel = () => {
    handleModal(false);
  };

  return (
    // <div className="modal absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-neutral-dark/75 text-center font-ibarra text-lg text-neutral-lightest backdrop-blur-lg">
    <div
      className="modal-overlay fixed inset-0 flex items-center justify-center rounded-lg bg-neutral-dark/75 text-center font-ibarra text-lg text-neutral-lightest backdrop-blur-lg"
      aria-hidden
      onClick={handleClickCancel}
    >
      <div className="content-wrapper flex flex-col items-center justify-center gap-2 px-4 py-2">
        {/* <p className="whitespace-pre-line text-center">{`Are you sure you want to select \n ${selectedCard}?`}</p> */}
        <p>Are you sure you want to select:</p>
        <span className="text-center italic">{`${selectedCard} ?`}</span>
        <div className="mt-2 flex gap-16">
          <button type="button" onClick={handleClickConfirm}>
            {" "}
            ✅ Yes{" "}
          </button>
          <button type="button" onClick={handleClickCancel}>
            {" "}
            ❌ No{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  selectedCard: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
};
