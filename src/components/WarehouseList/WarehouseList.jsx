import WarehouseCard from "../WarehouseCard/WarehouseCard";
import searchIcon from "../../assets/icons/search-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseList.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const WarehouseList = () => {
  const getURL = "http://localhost:8080/api/warehouses";

  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        console.log(response.data);
        setWarehouses(response.data);
        // setTimeout(() => {
        //   setWarehouses(response);
        // }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (warehouses.length === 0) {
    return <h1>LOADING...</h1>
  }
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
          {warehouses.map((warehouse, index) => {
            return (
              <WarehouseCard
                warehouse={warehouse}
                key={index}
                // id={warehouse.id}
                // name={warehouse.warehouse_name}
                // address={warehouse.address}
                // city={warehouse.city}
                // country={warehouse.country}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WarehouseList;
