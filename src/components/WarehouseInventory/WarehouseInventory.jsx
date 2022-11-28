import "./WarehouseInventory.scss";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import sortIcon from "../../assets/icons/sort-24px.svg";
import InventoryModal from "../InventoryModal/InventoryModal";

const WarehouseInventory = ({
  warehouseInventory,
  modalHandler,
  showModal,
  id
}) => {
  // InventoryModal

  console.log("Show Modal", showModal)

  console.log("Id check", id)
  console.log("Inventory Check", warehouseInventory);
  return (
    <>
      {showModal ? (
        <>
        <InventoryModal inventory={warehouseInventory} inventoryId={id} modalHandler={modalHandler}/>
          <div className="WarehouseInventory">
            <div className="WarehouseInventory__sort-row">
              <div className="WarehouseInventory__sort-inventory">
                <span className="WarehouseInventory__sort-text">
                  Inventory Item
                </span>
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
                <span className="WarehouseInventory__sort-action-text">
                  Action
                </span>
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
                  modalHandler={modalHandler}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="WarehouseInventory">
            <div className="WarehouseInventory__sort-row">
              <div className="WarehouseInventory__sort-inventory">
                <span className="WarehouseInventory__sort-text">
                  Inventory Item
                </span>
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
                <span className="WarehouseInventory__sort-action-text">
                  Action
                </span>
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
                  modalHandler={modalHandler}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default WarehouseInventory;
