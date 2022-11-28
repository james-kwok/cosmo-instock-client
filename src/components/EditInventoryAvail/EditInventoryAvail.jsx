import "./EditInventoryAvail.scss";
import ErrorState from "../ErrorState.js/ErrorState";
import arrowDropdown from "../../assets/icons/arrow_drop_down-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const EditInventoryAvail = ({
  handleChangeStatus,
  handleChangeWarehouse,
  handleChangeQuant,
  submit,
  status,
  warehouse,
  quant,
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
  // console.log(warehouses[0].warehouse_name)
  return (
    <>
      <section className="edit-availability">
        <h2 className="edit-availability__title">Item Availability</h2>
        <div action="" className="edit-availability__form">
          <div className="edit-availability__form__box">
            <label
              className="edit-availability__form__box--label"
            >
              Status
            </label>
            
          <div className = {submit === true && !status ? "edit-availability__choices--error" : "edit-availability__choices"}>
            <div className="edit-availability__choice">
              <input
                id="instock"
                name="radio"
                type="radio"
                value="In Stock"
                onChange={handleChangeStatus}
              ></input>
              <label className="edit-availability__value" htmlFor="instock">In stock</label>
            </div>
            <div className="edit-availability__choice">
              <input
                id="outstock"
                name="radio"
                type="radio"
                value="Out Of Stock"
                onChange={handleChangeStatus}
              ></input>
              <label className="edit-availability__value" htmlFor="outstock">Out of stock</label>
            </div>
          </div>
          {submit === true && !status === true && <ErrorState />}
          </div>

          <div className={`edit-availability__form__box  ${
            status === "Out Of Stock"
              ? "edit-availability__noshow"
              : ""
          }`}>
            <label
              className="edit-availability__form__box--label"
              htmlFor="quant"
            >
              Quantity
            </label>
            <input
              id="quant"
              name="quant"
              type="text"
              value={quant}
              className = {submit === true && !quant ? "edit-availability__form__box--error" : "edit-availability__form__box--input"}
              onChange={handleChangeQuant}
            ></input>
            {submit === true && !quant === true && <ErrorState />}
          </div>

          <div className="edit-availability__form__box">
            <label
              className="edit-availability__form__box--label"
              htmlFor="warehouse"
            >
              Warehouse
            </label>
            <div className={
                  submit === true && !warehouse
                    ? "edit-availability__dropdown--error"
                    : "edit-availability__dropdown"
                }>
            <select
              id="warehouse"
              name="warehouse"
              className="edit-details__category-dropdown"
              value={warehouse}
              onChange={handleChangeWarehouse}
            >
            <option value="" disabled>Please select</option>
            { warehouses.length !== 0 ? warehouses.map((item,index) => {
           return (<option key={index} value={item.warehouse_name}>{item.warehouse_name}</option>)}) : <></>}
            </select>
            <img
                className="edit-details__dropdown-icon"
                src={arrowDropdown}
                alt="dropdown menu"
              />
            </div>
            {submit === true && !warehouse === true && <ErrorState />}
          </div>
        </div>
      </section>
    </>
  );
};
export default EditInventoryAvail;
