import { Link, useParams } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseCard.scss";

const WarehouseCard = ({ warehouse, modalHandler }) => {
  // const { id } = useParams();
  return (
    <div className="WarehouseCard">
      <div className="WarehouseCard__warehouse">
        <h4 className="WarehouseCard__title">Warehouse</h4>
        <Link to="/warehouses/:id" className="WarehouseCard__link">
          <h3 className="WarehouseCard__link-text">
            {warehouse.warehouse_name}
          </h3>
          <img
            className="WarehouseCard__chevron"
            src={chevronRight}
            alt="navigate to this warehouse"
          />
        </Link>
      </div>
      <div className="WarehouseCard__address">
        <h4 className="WarehouseCard__title">Address</h4>
        <p className="WarehouseCard__text">
          {warehouse.address}, {warehouse.city}, {warehouse.country}
        </p>
      </div>
      <div className="WarehouseCard__contact">
        <h4 className="WarehouseCard__title">Contact Name</h4>
        <p className="WarehouseCard__text">{warehouse.contact_name}</p>
      </div>
      <div className="WarehouseCard__contact-info">
        <h4 className="WarehouseCard__title">Contact Information</h4>
        <p className="WarehouseCard__text">{warehouse.contact_phone}</p>
        <p className="WarehouseCard__text">{warehouse.contact_email}</p>
      </div>
      <div className="WarehouseCard__icon-group">
        <img
          className="WarehouseCard__delete-icon"
          src={deleteIcon}
          alt="delete warehouse"
          onClick={() => {
            modalHandler(warehouse, true);
          }}
        />
        <img
          className="WarehouseCard__edit-icon"
          src={editIcon}
          alt="edit warehouse"
        />
      </div>
    </div>
  );
};

export default WarehouseCard;
