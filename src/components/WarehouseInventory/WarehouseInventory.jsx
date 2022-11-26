import "./WarehouseInventory.scss";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import sortIcon from "../../assets/icons/sort-24px.svg";
const WarehouseInventory = ({ warehouseInventory }) => {
  console.log("Inventory", warehouseInventory)
  return (
    <div className="WarehouseInventory">
      <div className="WarehouseInventory__sort-row">
        <div className="WarehouseInventory__sort-inventory">
          <span className="WarehouseInventory__sort-text">Inventory Item</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-category">
          <span className="WarehouseInventory__sort-text">Category</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-status">
          <span className="WarehouseInventory__sort-text">Status</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-quant">
          <span className="WarehouseInventory__sort-text">Qty</span>
          <img
            className="WarehouseInventory__sort-icon"
            src={sortIcon}
            alt="sorting icon"
          />
        </div>
        <div className="WarehouseInventory__sort-action">
          <span className="WarehouseInventory__sort-action-text">Action</span>
        </div>
      </div>
      {warehouseInventory.inventory.map((warehouse, index) => {
        return (
          <WarehouseInventoryItem
            key={index}
            InventoryId={warehouse.id}
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