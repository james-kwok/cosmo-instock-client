import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px-white.svg";

function WarehouseDetails() {
  return (
    <div className="WarehouseDetails">
      <div className="WarehouseDetails__container">
        <img
          className="WarehouseDetails__back-icon"
          src={backIcon}
          alt="back to warehouse list"
        />
        <h1 className="WarehouseDetails__title">Washington</h1>
        <div className="WarehouseDetails__button-wrapper">
          <img
            className="WarehouseDetails__edit-icon"
            src={editIcon}
            alt="edit warehouse details"
          />
          <p className="WarehouseDetails__edit-text">Edit</p>
        </div>
      </div>
      <div className="WarehouseDetails__info-container">
        <div className="WarehouseDetails__address">
          <span className="WarehouseDetails__label">
            Warehouse Address
          </span>
          <p className="WarehouseDetails__text">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="WarehouseDetails__contact">
          <div className="WarehouseDetails__contact-name">
            <span className="WarehouseDetails__label">
              Contact Name:
            </span>
            <p className="WarehouseDetails__text">Graeme Lyon</p>
            <p className="WarehouseDetails__text">
              Warehouse Manager
            </p>
          </div>
          <div className="WarehouseDetails__contact-info">
            <span className="WarehouseDetails__label">Contact Information:</span>
            <p className="WarehouseDetails__text">+1(647)504-0911</p>
            <p className="WarehouseDetails__text">glyon@instock.com</p>
          </div>
        </div>
      </div>
      <div className="WarehouseDetails__sort-row">
          <div className="WarehouseDetails__sort-inventory">
            <span className="WarehouseDetails__sort-text">Inventory Item</span>
            <img
              className="WarehouseDetails__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseDetails__sort-category">
            <span className="WarehouseDetails__sort-text">Category</span>
            <img
              className="WarehouseDetails__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseDetails__sort-status">
            <span className="WarehouseDetails__sort-text">Status</span>
            <img
              className="WarehouseDetails__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseDetails__sort-qty">
            <span className="WarehouseDetails__sort-text">
              Quantity
            </span>
            <img
              className="WarehouseDetails__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseDetails__sort-action">
            <span className="WarehouseDetails__sort-action-text">Actions</span>
          </div>
        </div>
    </div>
  );
}

export default WarehouseDetails;
