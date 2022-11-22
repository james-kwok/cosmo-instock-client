// import { Link } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseCard.scss";

const WarehouseCard = () => {
  return (
    <>
      <div className="WarehouseCard">
        <div className="WarehouseCard__container">
          <h4 className="WarehouseCard__title">Warehouse</h4>
          {/* <Link to="/warehouses/:id" className="WarehouseCard__link"> */}
          <div className="WarehouseCard__link">
            <h3 className="WarehouseCard__link-text">Manhattan</h3>
            <img
              className="WarehouseCard__chevron"
              src={chevronRight}
              alt="navigate to this warehouse"
            />
          </div>
          {/* </Link> */}
        </div>
        <div className="WarehouseCard__container">
          <h4 className="WarehouseCard__title">Contact Name</h4>
          <p className="WarehouseCard__text">Parmin Aujla</p>
        </div>
        <div className="WarehouseCard__container">
          <h4 className="WarehouseCard__title">Address</h4>
          <p className="WarehouseCard__text">503 Broadway. New York, USA</p>
        </div>
        <div className="WarehouseCard__container">
          <h4 className="WarehouseCard__title">Contact Information</h4>
          <p className="WarehouseCard__text">+1(629)555-0129</p>
          <p className="WarehouseCard__text">paujla@instock.com</p>
        </div>
        <div className="WarehouseCard__icon-group">
          <img
            className="WarehouseCard__delete-icon"
            src={deleteIcon}
            alt="delete warehouse"
          />
          <img
            className="WarehouseCard__edit-icon"
            src={editIcon}
            alt="edit warehouse"
          />
        </div>
      </div>
    </>
  );
};

export default WarehouseCard;
