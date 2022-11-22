import WarehouseCard from "../WarehouseCard/WarehouseCard";
import searchIcon from "../../assets/icons/search-24px.svg";
// import { Link } from "react-router-dom";
import "./WarehouseList.scss";

const WarehouseList = (props) => {
  return (
    <>
      <div className="WarehouseList">
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
        {/* <Link to="/warehouses/add" className="WarehouseList__button-add"> */}
          <div className="WarehouseList__button-wrapper">
            <a className="WarehouseList__button-text">+ Add New Warehouse</a>
          </div>
        {/* </Link> */}
        <WarehouseCard />
        <WarehouseCard />
        <WarehouseCard />
        {/* {props.map((warehouse) => {
          return <WarehouseCard />;
        })} */}
      </div>
    </>
  );
};

export default WarehouseList;
