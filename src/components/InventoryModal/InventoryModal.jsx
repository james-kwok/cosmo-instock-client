import "./InventoryModal.scss";
import xIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

const Modal = ({ inventory, modalHandler,inventoryId }) => {
  const URL = "http://localhost:8080/api/inventories";
  const id = inventory.id || inventoryId;
  console.log(id);

  const handleDelete = () => {
    axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        console.log("Deleted inventory" + response);
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
                onClick={() => {
                  modalHandler(false);
                }}
              />
            </div>
            <div className="modal__header">
              <h4 className="modal__title">
                Delete {inventory.item_name} inventory item?
              </h4>
            </div>
            <div className="modal__description">
              <p className="modal__description-text">
                Please confirm that you'd like to delete the{" "}
                {inventory.item_name} from the inventory list. You won't be able
                to undo this action.
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
