import "./InventoryDetails.scss";
import editImage from "../../assets/icons/edit-white.svg";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function InventoryDetails() {
  const params = useParams();
  const getURL = `http://localhost:8080/api/inventories/${params.id}`;
  const getURL2 = "http://localhost:8080/api/warehouses";

  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(getURL2)
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (inventory.length === 0) {
    return <h1>LOADING...</h1>;
  }

  if (warehouses.length === 0) {
    return <h1>LOADING...</h1>;
  }

  let inventoryName = inventory.item_name;
  let itemDescription = inventory.description;
  let itemCategory = inventory.category;
  let itemStatus = inventory.status;
  let itemQuantity = inventory.quantity;
  let warehouseName = warehouses.find(
    (warehouse) => warehouse.id === inventory.warehouse_id
  ).warehouse_name;

  return (
    <div className="inventoryitem">
      <div className="inventoryitem__navigate">
        <img
          className="inventoryitem__back"
          src={backIcon}
          alt="back to inventory list"
        />
        <span className="inventoryitem__link-title">{inventoryName}</span>
        <div className="inventoryitem__button-wrapper">
          <img className="inventoryitem__edit" src={editImage} alt="edit" />
          <p className="inventoryitem__edit-text">Edit</p>
        </div>
      </div>
      <div className='inventoryitem"__align'>
        <div className="inventoryitem__description">
          <span className="inventoryitem__title">ITEM DESCRIPTION:</span>
          <span className="inventoryitem__text">{itemDescription}</span>
        </div>
        <div className="inventoryitem__category">
          <span className="inventoryitem__title">CATEGORY:</span>
          <span className="inventoryitem__text">{itemCategory}</span>
        </div>
        <div className="inventoryitem__status">
          <span className="inventoryitem__title">STATUS:</span>
          <span
            className={`inventoryitem__status-text  ${
              itemStatus === "In Stock"
                ? "inventory-item__instock"
                : "inventory-item__outofstock"
            }`}
          >
            {itemStatus}
          </span>
        </div>
        <div className="inventoryitem__quantity">
          <span className="inventoryitem__title">QUANTITY:</span>
          <span className="inventoryitem__text">{itemQuantity}</span>
        </div>
        <div className="inventoryitem__warehouse">
          <span className="inventoryitem__title">WAREHOUSE:</span>
          <span className="inventoryitem__text">{warehouseName}</span>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;
