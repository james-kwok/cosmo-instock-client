import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// const inventoryList = [
//   {
//     Inventory: "Television",
//     Category: "Electronics",
//     Status: "In stock",
//     Quantity: 500,
//     Warehouse: "Manhanttan",
//   },
//   {
//     Inventory: "Gym Bag",
//     Category: "Gear",
//     Status: "In stock",
//     Quantity: 0,
//     Warehouse: "Manhanttan",
//   },
// ];

const InventoryList = () => {
  const getURL = "http://localhost:8000/api/inventories";

  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        setInventories(response.data);
        // setTimeout(() => {
        //   setWarehouses(response);
        // }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (inventories.length === 0) {
    return <h1>LOADING...</h1>;
  }
  console.log(inventories);
  return (
    <div className="inventory-list">
      <div className="inventory-list__nav">
        <h2 className="inventory-list__title">Inventory</h2>
        <div className="inventory-list__search">
          <input
            type="text"
            className="inventory-list__input"
            placeholder="Search..."
          />
          <img
            className="inventory-list__search-icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
        <div className="inventory-list__button-wrapper">
          <span className="inventory-list__button-text">+ Add New Item</span>
        </div>
      </div>
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
      </div>
      {inventories.map((item) => {
        return (
          <InventoryItem
            Inventory={item.item_name}
            Category={item.category}
            Status={item.status}
            Quantity={item.quantity}
            Warehouse={item.warehouse_id}
          />
        );
      })}
    </div>
  );
};
export default InventoryList;
