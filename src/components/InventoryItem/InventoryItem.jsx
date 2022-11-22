import "./InventoryItem.scss";
import deleteImage from "../../assets/Icons/delete_outline-24px.svg";
import editImage from "../../assets/Icons/edit-24px.svg";

function InventoryItem({ Inventory, Category, Status, Quantity, Warehouse }) {
  return (
    <div className="inventory-item">
      <div className="inventory-item__left">
        <span>INVENTORY ITEM</span>
        <span>{Inventory}</span>
        <span>CATEGORY</span>
        <span>{Category}</span>
      </div>
      <div className="inventory-item__right">
        <span>STATUS</span>
        <span>{Status}</span>
        <span>QTY</span>
        <span>{Quantity}</span>
        <span>WAREHOUSE</span>
        <span>{Warehouse}</span>
      </div>
      <div className="inventory-item__action">
        <img src={deleteImage} alt="delete" />
        <img src={editImage} alt="edit" />
      </div>
    </div>
  );
}
export default InventoryItem;
