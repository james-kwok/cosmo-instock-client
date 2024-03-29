import backIcon from "../../assets/icons/arrow_back-24px.svg";
import arrowDropdown from "../../assets/icons/arrow_drop_down-24px.svg";
import "./AddNewInventory.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import axios from "axios";

const AddNewInventory = ({
  handleChangeItemName,
  handleChangeDescription,
  handleChangeCategory,
  handleChangeStatus,
  handleChangeQuantity,
  handleChangeWarehouse,
  handleSubmit,
  handleCancel,
  submit,
  itemName,
  description,
  category,
  status,
  quantity,
  warehouse,
}) => {
  const getURL2 = "http://localhost:8080/api/warehouses";
  const [warehouses, setWarehouses] = useState([]);
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

  if (warehouses.length === 0) {
    return <LoadingScreen />;
  }
  return (
    <div className="AddNewInventory">
      <div className="AddNewInventory__title-container">
        <Link to="/inventory" className="AddNewInventory__back-link">
          <img
            className="AddNewInventory__back-icon"
            src={backIcon}
            alt="back to inventory list"
          />
        </Link>
        <h1 className="AddNewInventory__title">Add New Inventory Item</h1>
      </div>
      <form onSubmit={handleSubmit} className="AddNewInventory__form">
        <div className="AddNewInventory__item-details">
          <h2 className="AddNewInventory__form-title">Item Details</h2>
          <div className="AddNewInventory__input-container">
            <label htmlFor="itemName" className="AddNewInventory__label">
              Item Name
            </label>
            <input
              name="itemName"
              className={
                submit === true && !itemName
                  ? "AddNewInventory__item-input--error"
                  : "AddNewInventory__item-input"
              }
              placeholder="Item Name"
              type="text"
              onChange={handleChangeItemName}
            />
          </div>
          <div className="AddNewInventory__input-container">
            <label htmlFor="itemDescription" className="AddNewInventory__label">
              Description
            </label>
            <textarea
              name="itemDescription"
              className={
                submit === true && !description
                  ? "AddNewInventory__description-input--error"
                  : "AddNewInventory__description-input"
              }
              placeholder="Please enter a brief item description..."
              onChange={handleChangeDescription}
            />
          </div>
          <div className="AddNewInventory__input-container">
            <label htmlFor="itemCategory" className="AddNewInventory__label">
              Category
            </label>
            <div
              className={
                submit === true && !category
                  ? "AddNewInventory__dropdown--error"
                  : "AddNewInventory__dropdown"
              }
            >
              <select
                id="itemCategory"
                name="itemCategory"
                className="AddNewInventory__category-dropdown"
                placeholder="Please select"
                value={category}
                onChange={handleChangeCategory}
              >
                <option value="" disabled={true}>
                  Please select
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
                <option value="Apparel">Apparel</option>
              </select>
              <img
                className="AddNewInventory__dropdown-icon"
                src={arrowDropdown}
                alt="dropdown menu"
              />
            </div>
          </div>
        </div>
        <div className="AddNewInventory__item-availability">
          <h2 className="AddNewInventory__form-title">Item Availability</h2>
          <div className="AddNewInventory__input-container">
            <label htmlFor="status" className="AddNewInventory__label">
              Status
            </label>
            <div className="AddNewInventory__status">
              <div className="AddNewInventory__instock">
                <input
                  id="instock"
                  name="radio"
                  type="radio"
                  value="In Stock"
                  onChange={handleChangeStatus}
                ></input>
                <label className="AddNewInventory__value" htmlFor="instock">
                  In stock
                </label>
              </div>

              <div className="AddNewInventory__outofstock">
                <input
                  id="outstock"
                  name="radio"
                  type="radio"
                  value="Out Of Stock"
                  onChange={handleChangeStatus}
                ></input>
                <label className="AddNewInventory__value" htmlFor="outstock">
                  Out of stock
                </label>
              </div>
            </div>
          </div>
          <div
            className={`AddNewInventory__option ${
              status === "Out Of Stock" ? "AddNewInventory__no-show" : ""
            }`}
          >
            <label className="AddNewInventory__label" htmlFor="quantity">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="0"
              value={quantity}
              className={
                submit === true && !quantity
                  ? "AddNewInventory__item-input--error"
                  : "AddNewInventory__item-input"
              }
              onChange={handleChangeQuantity}
            ></input>
          </div>
          <div className="AddNewInventory__input-container">
            <label htmlFor="warehouse" className="AddNewInventory__label">
              Warehouse
            </label>
            <div
              className={
                submit === true && !warehouse
                  ? "AddNewInventory__dropdown--error"
                  : "AddNewInventory__dropdown"
              }
            >
              <select
                id="warehouse"
                name="warehouse"
                className="AddNewInventory__category-dropdown"
                placeholder="Please select"
                value={warehouse}
                onChange={handleChangeWarehouse}
              >
                <option
                  className="AddNewInventory__placeholder"
                  value=""
                  disabled={true}
                >
                  Please select
                </option>
                {warehouses.length !== 0 ? (
                  warehouses.map((item, index) => {
                    return (
                      <option key={index} value={item.warehouse_name}>
                        {item.warehouse_name}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </select>
              <img
                className="AddNewInventory__dropdown-icon"
                src={arrowDropdown}
                alt="dropdown menu"
              />
            </div>
          </div>
        </div>
        <div className="AddNewInventory__buttons">
          <button
            onClick={handleCancel}
            type="button"
            className="AddNewInventory__cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="AddNewInventory__submit-button">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNewInventory;
