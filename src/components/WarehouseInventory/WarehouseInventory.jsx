import "./WarehouseInventory.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const WarehouseInventory = () => {
  const getURL = "http://localhost:8080/api/warehouses/:id";
  const [warehouseinventory, setWarehouseinventory] = useState([]);
  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        setWarehouseinventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (warehouseinventory.length === 0) {
    return <h1>LOADING...</h1>;
  }
  console.log(warehouseinventory);
  return (
    <div className="inventory-list__sort-row">
      <div className="inventory-list__sort-inventory">
        <span className="inventory-list__sort-text">INVENTORY ITEM</span>
        <img
          className="inventory-list__sort-icon"
          src={sortIcon}
          alt="sorting icon"
        />
      </div>
      <div className="inventory-list__sort-category">
        <span className="inventory-list__sort-text">CATEGORY</span>
        <img
          className="inventory-list__sort-icon"
          src={sortIcon}
          alt="sorting icon"
        />
      </div>
      <div className="inventory-list__sort-status">
        <span className="inventory-list__sort-text">STATUS</span>
        <img
          className="inventory-list__sort-icon"
          src={sortIcon}
          alt="sorting icon"
        />
      </div>
      <div className="inventory-list__sort-quant">
        <span className="inventory-list__sort-text">QTY</span>
        <img
          className="inventory-list__sort-icon"
          src={sortIcon}
          alt="sorting icon"
        />
      </div>
      <div className="inventory-list__sort-warehouse">
        <span className="inventory-list__sort-text">WAREHOUSE</span>
        <img
          className="inventory-list__sort-icon"
          src={sortIcon}
          alt="sorting icon"
        />
      </div>
      <div className="inventory-list__sort-action">
        <span className="inventory-list__sort-action-text">ACTIONS</span>
      </div>
      {/* {warehouseinventory.map((item) => {
        return (
          <InventoryItem
            Inventory={item.item_name}
            Category={item.category}
            Status={item.status}
            Quantity={item.quantity}
            Warehouse={
              warehouses.find((warehouse) => warehouse.id === item.warehouse_id)
                .warehouse_name
            }
          />
        );
      })} */}
    </div>
  );
};

export default WarehouseInventory;
