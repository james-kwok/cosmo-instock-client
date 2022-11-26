import "./InventoryEdit.scss";
import React from "react";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditInventoryDetails from "../EditInventoryDetails/EditInventoryDetails";
import EditInventoryAvail from "../EditInventoryAvail/EditInventoryAvail";
import axios from "axios";

const InventoryEdit = () => {
  const [itemName, setItemname] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [quant, setQuant] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [warehouse, setWarehouse] = useState("Manhattan");
  const [submit, Setsubmit] = useState(false);
 

  const navigate = useNavigate();

  const handleChangeItemname = (event) => {
    setItemname(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeQuant = (event) => {
    setQuant(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeWarehouse = (event) => {
    setWarehouse(event.target.value);
  };

  const params = useParams();
  const getURL = `http://localhost:8080/api/inventories/${params.id}`;
  
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
    return <h1>LOADING...</h1>;
  }

  let warehouseid = warehouses.find(
    (item) => item.warehouse_name === warehouse
  ).id;

  console.log({
    warehouse_id: warehouseid,
    item_name: itemName,
    description: description,
    category: category,
    status: status,
    quantity: Number(quant)
  })

  const isFormValid = () => {
    if (itemName === "" || description === "") {
      return false;
    }
    axios
    .patch(getURL, {
      warehouse_id: warehouseid,
      item_name: itemName,
      description: description,
      category: category,
      status: status,
      quant: Number(quant)
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    return true;
  };

  const handleSubmit = (event) => {
    Setsubmit(true);
    event.preventDefault();
    if (isFormValid()) {
      console.log("submit form success");
      return setTimeout(() => {
        navigate("/inventory");
      }, 2000);
    }
  };

  const handleCancel = () => {
    return navigate("/inventory");
  };

  return (
    <>
      <section className="edit-inventory">
        <div className="edit-inventory__box">
          <div className="edit-inventory__box-titleblock">
            <img
              className="edit-inventory__box-titleblock--icons"
              src={backarrow}
              alt="back arrow"
            />
            <h1 className="edit-inventory__box-titleblock--title">
              Edit Inventory Item
            </h1>
          </div>
        </div>

        {/* onSubmit on form to run front-end validation */}
        <form onSubmit={handleSubmit}>
          <div className="edit-inventory__content">
            <EditInventoryDetails
              handleChangeItemname={handleChangeItemname}
              handleChangeDescriptions={handleChangeDescription}
              handleChangeCategory={handleChangeCategory}
              submit={submit}
              itemName={itemName}
              description={description}
              category={category}
            />

            <EditInventoryAvail
              handleChangeStatus={handleChangeStatus}
              handleChangeWarehouse={handleChangeWarehouse}
              handleChangeQuant={handleChangeQuant}
              submit={submit}
              status={status}
              warehouse={warehouse}
              quant={quant}
            />
          </div>

          <div className="edit-inventory__container">
            <div className="edit-inventory__container__buttons">
              <button
                onClick={handleCancel}
                type="button"
                className="edit-inventory__container__buttons--button edit-inventory__container__buttons--cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="edit-inventory__container__buttons--button edit-inventory__container__buttons--save"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default InventoryEdit;
