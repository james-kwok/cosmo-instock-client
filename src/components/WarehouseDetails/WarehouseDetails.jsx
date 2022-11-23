import "./WarehouseDetails.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseDetails() {
  return (
    <div className="wh">
      <div className="wh__container">
        <div className="wh__header">
          <div className="wh__header-section">
            <div className="wh__btn-title">
              <img className="wh__btn-img" src={backArrow} alt="back arrow" />
              <h1 className="wh__header-name">Washington</h1>
            </div>
            <div className="wh__header-edit">
              <img
                className="wh__header-edit-img"
                src={edit}
                alt="edit button"
              />
            </div>
          </div>
        </div>
        <div className="wh__details">
          <div className="wh__details-container">
            <div className="wh__details-section">
              <div className="wh__address">
                <p className="wh__address-title">Warehouse Address:</p>
                <p className="wh__address-info">
                  33 Pearl Street SW, Washington, USA
                </p>
              </div>
            </div>
            <div className="wh__contact">
              <div className="wh__contact-left">
                <p className="wh__contact-title">Contact Name:</p>
                <p className="wh__contact-name">Graeme Lyon</p>
                <p className="wh__contact-job">Warehouse Manager</p>
              </div>
              <div className="wh__contact-right">
                <p className="wh__contact-info">Contact Information:</p>
                <p className="wh__contact-phone">+1 (647) 504-0911</p>
                <p className="wh__contact-email">glyon@instock.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inventory">
          <div className="inventory__container">
            <div className="inventory__top">
              <div className="inventory__item">
                <p className="inventory__item-title">Inventory Item</p>
                <p className="inventory__item-name">Television</p>
              </div>
              <div className="inventory__type">
                <p className="inventory__type-title">Category</p>
                <p className="inventory__type-name">Electronics</p>
              </div>
            </div>
            <div className="inventory__bottom">
              <div className="inventory__status">
                <p className="inventory__status-title">Status</p>
                <p className="inventory__status-info">In Stock</p>
              </div>
              <div className="inventory__qty">
                <p className="inventory__qty-title">qty</p>
                <p className="inventory__qty-num">500</p>
              </div>
            </div>
          </div>
          <div className="inventory__btns">
            <div className="inventory__btns-section">
              <img src={deleteIcon} />
              <img src={editIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
