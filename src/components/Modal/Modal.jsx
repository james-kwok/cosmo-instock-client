import "./Modal.scss";
import xIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";


const Modal = ({ warehouse, modalHandler }) => {
  const URL = "http://localhost:8080/api/warehouses";
  const id = warehouse.id;

  const handleDelete = () => {
    console.log("Warehouse", warehouse);
    axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        console.log("Deleted warehouse" + response);
        modalHandler(false);
      })
      .catch((error) => {
        console.log(error);
      });
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
                Delete {warehouse.warehouse_name} Warehouse?
              </h4>
            </div>
            <div className="modal__description">
              <p className="modal__description-text">
                Please confirm that you'd like to delete the{" "}
                {warehouse.warehouse_name} from the list of warehouses. You
                won't be able to undo this action.
              </p>
            </div>
          </div>
          <div className="modal__container-cta">
            <div className="modal__cta">
              <button
                onClick={() => {
                  modalHandler(false);
                }}
                className="modal__cta-cancel"
              >
                Cancel
              </button>
              <button onClick={handleDelete} className="modal__cta-delete">
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
