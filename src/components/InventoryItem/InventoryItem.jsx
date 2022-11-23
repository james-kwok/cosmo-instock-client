import "./InventoryItem.scss";
import deleteImage from "../../assets/icons/delete_outline-24px.svg";
import editImage from "../../assets/icons/edit.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";

function InventoryItem({ Inventory, Category, Status, Quantity, Warehouse }) {
  return (
    <div className="inventory-item">
      <div className="inventory-item__container">
        <span className="inventory-item__title">INVENTORY ITEM</span>
        {/* <Link to="/inventory/:id" className="inventory-item__link"> */}
        <div className="inventory-item__link">
          <h3 className="inventory-item__link-text">{Inventory}</h3>
          <img
            className="inventory-item__chevron"
            src={chevronRight}
            alt="navigate to this inventory"
          />
        </div>
      </div>
      {/* </Link> */}
      <div className="inventory-item__container">
        <span className="inventory-item__title">CATEGORY</span>
        <span className="inventory-item__text">{Category}</span>
      </div>
      <div className="inventory-item__container">
        <span className="inventory-item__title">STATUS</span>
        <span className="inventory-item__status">{Status}</span>
      </div>
      <div className="inventory-item__container">
        <span className="inventory-item__title">QTY</span>
        <span className="inventory-item__text">{Quantity}</span>
      </div>
      <div className="inventory-item__container">
        <span className="inventory-item__title">WAREHOUSE</span>
        <span className="inventory-item__text">{Warehouse}</span>
      </div>
      <div className="inventory-item__icons">
        <img
          className="inventory-item__delete-icon"
          src={deleteImage}
          alt="delete"
        />
        <img className="inventory-item__edit-icon" src={editImage} alt="edit" />
      </div>
    </div>
  );
}
export default InventoryItem;
