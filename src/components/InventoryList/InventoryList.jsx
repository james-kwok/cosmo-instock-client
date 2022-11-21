import "./InventoryList.scss";

const InventList = [
  {
    Inventory: "Television",
    Category: "Electronics",
    Status: "In stock",
    Quantity: 500,
    Warehouse: "Manhanttan",
  },
  {
    Inventory: "Gym Bag",
    Category: "Gear",
    Status: "Out of stock",
    Quantity: 0,
    Warehouse: "Manhanttan",
  },
];

function InventoryList() {
  return (
    <div className="inventory-list">
      <div classname="inventory-list__nav">
        <h2 className="inventory-list__title">Inventory</h2>
        <input
          type="text"
          className="inventory-list__input"
          placeholder="Search..."
        />
        <span className="inventory-list__button">Add New Item</span>
      </div>
      {InventList.map((item) => {
        <InventoryItem
          Inventory={item.Inventory}
          Category={item.Category}
          Status={item.Status}
          Quantity={item.Quantity}
          Warehouse={item.Warehouse}
        />;
      })}
    </div>
  );
}
export default InventoryList;
