import "./WarehouseDetails.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

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
    </div>
  );
}

export default WarehouseDetails;
