import PropTypes from "prop-types";

export default function ModalConfirm({
  selectedCard,
  setIsModalOpen,
  setSelectedCard,
  setIsEndGame,
}) {
  const { name } = selectedCard;

  const handleClickConfirm = () => {
    setIsEndGame(true);
    setIsModalOpen(false);
  };

  const handleClickCancel = () => {
    setSelectedCard({});
    setIsModalOpen(false);
  };

  return (
    <div
      aria-hidden
      className="modal fixed bottom-[205px] left-[440px] flex -translate-x-1/2 items-center justify-center rounded-lg bg-neutral-darkest/75 text-center font-ibarra text-lg text-neutral-lightest backdrop-blur-lg"
    >
      <div className="content-wrapper flex flex-col items-center justify-center gap-2 px-8 py-8">
        <p>
          Confirm card:{" "}
          <span className="text-center italic">{`${name} ?`}</span>
        </p>

        <div className="mt-2 flex gap-8">
          <button
            type="button"
            className="modal__btn w-fit border px-8  py-1 text-[20px]"
            onClick={handleClickConfirm}
          >
            ✅ Yes
          </button>
          <button
            type="button"
            className="modal__btn w-fit border px-8 py-1 text-[20px]"
            onClick={handleClickCancel}
          >
            ❌ No
          </button>
        </div>
      </div>
    </div>
  );
}

ModalConfirm.propTypes = {
  selectedCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedCard: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setIsEndGame: PropTypes.func.isRequired,
};
