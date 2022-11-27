import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryModal from "../../components/InventoryModal/InventoryModal"

const InventoryList = () => {
  const getURL = "http://localhost:8080/api/inventories";
  const getURL2 = "http://localhost:8080/api/warehouses";

  const [inventories, setInventories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        setInventories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [showModal]);

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

  const modalHandler = (inventory, modal) => {
    console.log(inventory);
    setShowModal(modal);
    setToDelete(inventory);
  };

  const clickedInfo = () => {
    console.log("Clicked");
  };

  if (warehouses.length === 0) {
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
          <Link to="/inventory/add" className="WarehouseList__button-add">
            <div className="inventory-list__button-wrapper">
              <span className="inventory-list__button-text">
                + Add New Item
              </span>
            </div>
          </Link>
        </div>
        <div className="inventory-list__sort-row">
          <div className="inventory-list__sort-inventory">
            <span className="inventory-list__sort-text">Inventory Item</span>
            <img
              className="inventory-list__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="inventory-list__sort-category">
            <span className="inventory-list__sort-text">Category</span>
            <img
              className="inventory-list__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="inventory-list__sort-status">
            <span className="inventory-list__sort-text">Status</span>
            <img
              className="inventory-list__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="inventory-list__sort-quant">
            <span className="inventory-list__sort-text">Qty</span>
            <img
              className="inventory-list__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="inventory-list__sort-warehouse">
            <span className="inventory-list__sort-text">Warehouse</span>
            <img
              className="inventory-list__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="inventory-list__sort-action">
            <span className="inventory-list__sort-action-text">Actions</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {showModal ? (
        <>
          <InventoryModal modalHandler={modalHandler} inventory={toDelete} />
          <div className="inventory-list mobile-hider">
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
                <Link to="/inventory/add" className="WarehouseList__button-add">
                  <div className="inventory-list__button-wrapper">
                    <span className="inventory-list__button-text">
                      + Add New Item
                    </span>
                  </div>
                </Link>
              </div>
              <div className="inventory-list__sort-row">
                <div className="inventory-list__sort-inventory">
                  <span className="inventory-list__sort-text">
                    Inventory Item
                  </span>
                  <img
                    className="inventory-list__sort-icon"
                    src={sortIcon}
                    alt="sorting icon"
                  />
                </div>
                <div className="inventory-list__sort-category">
                  <span className="inventory-list__sort-text">Category</span>
                  <img
                    className="inventory-list__sort-icon"
                    src={sortIcon}
                    alt="sorting icon"
                  />
                </div>
                <div className="inventory-list__sort-status">
                  <span className="inventory-list__sort-text">Status</span>
                  <img
                    className="inventory-list__sort-icon"
                    src={sortIcon}
                    alt="sorting icon"
                  />
                </div>
                <div className="inventory-list__sort-quant">
                  <span className="inventory-list__sort-text">Qty</span>
                  <img
                    className="inventory-list__sort-icon"
                    src={sortIcon}
                    alt="sorting icon"
                  />
                </div>
                <div className="inventory-list__sort-warehouse">
                  <span className="inventory-list__sort-text">Warehouse</span>
                  <img
                    className="inventory-list__sort-icon"
                    src={sortIcon}
                    alt="sorting icon"
                  />
                </div>
                <div className="inventory-list__sort-action">
                  <span className="inventory-list__sort-action-text">
                    Actions
                  </span>
                </div>
              </div>
              {inventories.length !== 0 && warehouses.length !== 0 ? (
                inventories.map((item) => {
                  return (
                    <InventoryItem
                      key={item.id}
                      id={item.id}
                      Inventory={item.item_name}
                      Category={item.category}
                      Status={item.status}
                      Quantity={item.quantity}
                      Warehouse={
                        warehouses.find(
                          (warehouse) => warehouse.id === item.warehouse_id
                        ).warehouse_name
                      }
                      modalHandler={modalHandler}
                      clickedInfo={clickedInfo}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
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
            <Link to="/inventory/add" className="WarehouseList__button-add">
              <div className="inventory-list__button-wrapper">
                <span className="inventory-list__button-text">
                  + Add New Item
                </span>
              </div>
            </Link>
          </div>
          <div className="inventory-list__sort-row">
            <div className="inventory-list__sort-inventory">
              <span className="inventory-list__sort-text">Inventory Item</span>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sorting icon"
              />
            </div>
            <div className="inventory-list__sort-category">
              <span className="inventory-list__sort-text">Category</span>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sorting icon"
              />
            </div>
            <div className="inventory-list__sort-status">
              <span className="inventory-list__sort-text">Status</span>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sorting icon"
              />
            </div>
            <div className="inventory-list__sort-quant">
              <span className="inventory-list__sort-text">Qty</span>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sorting icon"
              />
            </div>
            <div className="inventory-list__sort-warehouse">
              <span className="inventory-list__sort-text">Warehouse</span>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sorting icon"
              />
            </div>
            <div className="inventory-list__sort-action">
              <span className="inventory-list__sort-action-text">Actions</span>
            </div>
          </div>
          {inventories.length !== 0 && warehouses.length !== 0 ? (
            inventories.map((item) => {
              return (
                <InventoryItem
                  key={item.id}
                  id={item.id}
                  Inventory={item.item_name}
                  Category={item.category}
                  Status={item.status}
                  Quantity={item.quantity}
                  Warehouse={
                    warehouses.find(
                      (warehouse) => warehouse.id === item.warehouse_id
                    ).warehouse_name
                  }
                  modalHandler={modalHandler}
                  clickedInfo={clickedInfo}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};
export default InventoryList;
