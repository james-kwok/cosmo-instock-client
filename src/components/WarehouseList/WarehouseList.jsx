import WarehouseCard from "../WarehouseCard/WarehouseCard";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseList.scss";

const WarehouseList = () => {
  return (
    <>
      <div className="WarehouseList">
        <div className="WarehouseList__container">
          <h1 className="WarehouseList__title">Warehouses</h1>
          <div className="WarehouseList__search">
            <input
              className="WarehouseList__input"
              type="text"
              placeholder="Search..."
            />
            <img
              className="WarehouseList__search-icon"
              src={searchIcon}
              alt="static search icon"
            />
          </div>
          <Link to="/warehouses/add" className="WarehouseList__button-add">
          <div className="WarehouseList__button-wrapper">
            <p className="WarehouseList__button-text">+ Add New Warehouse</p>
          </div>
          </Link>
        </div>
        <div className="WarehouseList__sort-row">
          <div className="WarehouseList__sort-warehouse">
            <span className="WarehouseList__sort-text">Warehouse</span>
            <img
              className="WarehouseList__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseList__sort-address">
            <span className="WarehouseList__sort-text">Address</span>
            <img
              className="WarehouseList__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseList__sort-contact">
            <span className="WarehouseList__sort-text">Contact Name</span>
            <img
              className="WarehouseList__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseList__sort-contact-info">
            <span className="WarehouseList__sort-text">
              Contact Information
            </span>
            <img
              className="WarehouseList__sort-icon"
              src={sortIcon}
              alt="sorting icon"
            />
          </div>
          <div className="WarehouseList__sort-action">
            <span className="WarehouseList__sort-action-text">Actions</span>
          </div>
        </div>
        <div className="WarehouseList__cards">
          <WarehouseCard />
          <WarehouseCard />
          <WarehouseCard />
          {/* {props.map((warehouse) => {
          return <WarehouseCard />;
        })} */}
        </div>
      </div>
    </>
  );
};

export default WarehouseList;
