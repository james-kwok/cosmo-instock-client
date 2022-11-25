import "./WarehouseInventory.scss";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import sortIcon from "../../assets/icons/sort-24px.svg";

const WarehouseInventory = ({ warehouseInventory }) => {
  return (
    <div className="WarehouseInventory">
      <div className="WarehouseInventory__sort-row">
        <div className="WarehouseInventory__sort-inventory">
          <span className="WarehouseInventory__sort-text">INVENTORY ITEM</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-category">
          <span className="WarehouseInventory__sort-text">CATEGORY</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-status">
          <span className="WarehouseInventory__sort-text">STATUS</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-quant">
          <span className="WarehouseInventory__sort-text">QTY</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-action">
          <span className="WarehouseInventory__sort-action-text">ACTIONS</span>
        </div>
      </div>
      {warehouseInventory.map((warehouse, index) => {
        return (
          <WarehouseInventoryItem
            key={index}
            Inventory={warehouse.item_name}
            Category={warehouse.category}
            Status={warehouse.status}
            Quantity={warehouse.quantity}
          />
        );
      })}
    </div>
  );
};

export default WarehouseInventory;
