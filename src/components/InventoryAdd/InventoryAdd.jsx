import AddNewInventory from "../AddNewInventory/AddNewInventory";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InventoryAdd = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeWarehouse = (e) => {
    setWarehouse(e.target.value);
  };

  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
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

  let warehouseid;
  if (warehouse) {
    warehouseid = warehouses.find(
      (item) => item.warehouse_name === warehouse
    ).id;
  }

  const isFormValid = () => {
    if (
      itemName === "" ||
      description === "" ||
      category === "" ||
      status === "" ||
      isNaN(quantity) ||
      warehouse === ""
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    setSubmit(true);
    e.preventDefault();
    if (isFormValid()) {
      axios
        .post("http://localhost:8080/api/inventories", {
          "warehouse_id": warehouseid,
          "item_name": itemName,
          "description": description,
          "category": category,
          "status": status,
          "quantity": Number(quantity),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return setTimeout(() => {
        navigate("/inventory");
      }, 2000);
    }
  };

  const handleCancel = () => {
    return navigate("/inventory");
  };

  return (
    <AddNewInventory
      handleChangeItemName={handleChangeItemName}
      handleChangeDescription={handleChangeDescription}
      handleChangeCategory={handleChangeCategory}
      handleChangeQuantity={handleChangeQuantity}
      handleChangeStatus={handleChangeStatus}
      handleChangeWarehouse={handleChangeWarehouse}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      submit={submit}
      itemName={itemName}
      description={description}
      category={category}
      status={status}
      quantity={quantity}
      warehouse={warehouse}
    />
  );
};

export default InventoryAdd;
