import "./Modal.scss";
import xIcon from "../../assets/icons/close-24px.svg";

const Modal = ({ warehouseName }) => {
  const handleClick = () => {
    // Add request to delete warehouse
  };

  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__container-text">
            <div className="modal__close">
              <img
                src={xIcon}
                className="modal__close-img"
                alt="closing icon"
              />
            </div>
            <div className="modal__header">
              <h4 className="modal__title">
                Delete {warehouseName} Warehouse?
              </h4>
            </div>
            <div className="modal__description">
              <p className="modal__description-text">
                Please confirm that you'd like to delete the {warehouseName}{" "}
                from the list of warehouses. You won't be able to undo this
                action.
              </p>
            </div>
          </div>
          <div className="modal__container-cta">
            <div className="modal__cta">
              <button className="modal__cta-cancel">Cancel</button>
              <button onClick={handleClick} className="modal__cta-delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
