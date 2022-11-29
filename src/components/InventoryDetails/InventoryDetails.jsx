import "./InventoryDetails.scss";
import editImage from "../../assets/icons/edit-24px-white.svg";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

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
      // eslint-disable-next-line
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
      // eslint-disable-next-line
  }, []);

  if (inventory.length === 0) {
    return (
      <LoadingScreen />
    );
  }

  if (warehouses.length === 0) {
    return (
      <LoadingScreen />
    );
  }

  let inventoryName = inventory.item_name;
  let itemDescription = inventory.description;
  let itemCategory = inventory.category;
  let itemStatus = inventory.status;
  let itemQuantity = inventory.quantity;
  let warehouseName = warehouses.find(
    (warehouse) => warehouse.id === inventory.warehouse_id
  ).warehouse_name;

  if (inventory.length !== 0 && warehouses.length !== 0) {
    return (
      <div className="inventoryitem">
        <div className="inventoryitem__navigate">
          <Link to="/inventory">
            <img
              className="inventoryitem__back"
              src={backIcon}
              alt="back to inventory list"
            />
          </Link>
          <span className="inventoryitem__link-title">{inventoryName}</span>

          <div className="inventoryitem__button-wrapper">
            <Link to="/inventory/edit/:id" className="inventoryitem__link">
              <img className="inventoryitem__edit" src={editImage} alt="edit" />
              <p className="inventoryitem__edit-text">Edit</p>
            </Link>
          </div>
        </div>
        <div className="inventoryitem__align">
          <div className="inventoryitem__left">
            <div className="inventoryitem__description">
              <span className="inventoryitem__title">Item Description:</span>
              <span className="inventoryitem__text">{itemDescription}</span>
            </div>
            <div className="inventoryitem__category">
              <span className="inventoryitem__title">Category:</span>
              <span className="inventoryitem__text">{itemCategory}</span>
            </div>
          </div>
          <div className="inventoryitem__right">
            <div className="inventoryitem__status">
              <span className="inventoryitem__title">Status:</span>
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
              <span className="inventoryitem__title">Quantity:</span>
              <span className="inventoryitem__text">{itemQuantity}</span>
            </div>
            <div className="inventoryitem__warehouse">
              <span className="inventoryitem__title">Warehouse:</span>
              <span className="inventoryitem__text">{warehouseName}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryDetails;
