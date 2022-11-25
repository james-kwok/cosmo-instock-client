import "./WarehouseInventory.scss";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const WarehouseInventory = () => {
  const getURL =
    "http://localhost:8080/api/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0";
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
  return (
    <div className="inventory-list">
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
        <div className="inventory-list__sort-action">
          <span className="inventory-list__sort-action-text">ACTIONS</span>
        </div>
      </div>
      {warehouseinventory.map((warehouse) => {
        return (
          <WarehouseInventoryItem
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
