import "./WarehouseDetails.scss";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px-white.svg";
import { Link } from "react-router-dom";

function WarehouseDetails({ warehouseDetails }) {
  return (
    <div className="WarehouseDetails">
      <div className="WarehouseDetails__container">
        <Link to="/warehouses" className="WarehouseDetails__back-link">
        <img
          className="WarehouseDetails__back-icon"
          src={backIcon}
          alt="back to warehouse list"
        />
        </Link>
        <h1 className="WarehouseDetails__title">
          {warehouseDetails.warehouse_name}
        </h1>
        <Link to="/warehouses/edit/:id" className="WarehouseDetails__button-wrapper">
          <img
            className="WarehouseDetails__edit-icon"
            src={editIcon}
            alt="edit warehouse details"
          />
          <p className="WarehouseDetails__edit-text">Edit</p>
        </Link>
      </div>
      <div className="WarehouseDetails__info-container">
        <div className="WarehouseDetails__address">
          <span className="WarehouseDetails__label">Warehouse Address</span>
          <p className="WarehouseDetails__text">
            {warehouseDetails.address}, {warehouseDetails.city},{" "}
            {warehouseDetails.country}
          </p>
        </div>
        <div className="WarehouseDetails__contact">
          <div className="WarehouseDetails__contact-name">
            <span className="WarehouseDetails__label">Contact Name:</span>
            <p className="WarehouseDetails__text">
              {warehouseDetails.contact_name}
            </p>
            <p className="WarehouseDetails__text">
              {warehouseDetails.contact_position}
            </p>
          </div>
          <div className="WarehouseDetails__contact-info">
            <span className="WarehouseDetails__label">
              Contact Information:
            </span>
            <p className="WarehouseDetails__text">
              {warehouseDetails.contact_phone}
            </p>
            <p className="WarehouseDetails__text">
              {warehouseDetails.contact_email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
