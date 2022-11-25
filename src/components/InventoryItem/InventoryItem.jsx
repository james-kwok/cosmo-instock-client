import "./InventoryItem.scss";
import deleteImage from "../../assets/icons/delete_outline-24px.svg";
import editImage from "../../assets/icons/edit-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

function InventoryItem({
  Inventory,
  Category,
  Status,
  Quantity,
  Warehouse,
  id,
}) {
  return (
    <div className="inventory-item">
      <div className="inventory-item__inventory">
        <span className="inventory-item__title">INVENTORY ITEM</span>
        <Link to={`/inventory/${id}`} className="inventory-item__link">
          <div className="inventory-item__link">
            <span className="inventory-item__link-text">{Inventory}</span>
            <img
              className="inventory-item__chevron"
              src={chevronRight}
              alt="navigate to this inventory"
            />
          </div>
        </Link>
      </div>
      <div className="inventory-item__category">
        <span className="inventory-item__title">CATEGORY</span>
        <span className="inventory-item__text">{Category}</span>
      </div>
      <div className="inventory-item__status">
        <span className="inventory-item__title">STATUS</span>
        <h3
          className={`inventory-item__status-text  ${
            Status === "In Stock"
              ? "inventory-item__instock"
              : "inventory-item__outofstock"
          }`}
        >
          {Status}
        </h3>
      </div>
      <div className="inventory-item__quant">
        <span className="inventory-item__title">QTY</span>
        <span className="inventory-item__text">{Quantity}</span>
      </div>
      <div className="inventory-item__warehouse">
        <span className="inventory-item__title">WAREHOUSE</span>
        <span className="inventory-item__text">{Warehouse}</span>
      </div>
      <div className="inventory-item__icons">
        <img
          className="inventory-item__delete-icon"
          src={deleteImage}
          alt="delete"
        />
        <Link to="/inventory/edit/:id" className="inventory-item__edit">
          <img
            className="inventory-item__edit-icon"
            src={editImage}
            alt="edit"
          />
        </Link>
      </div>
    </div>
  );
}
export default InventoryItem;
