import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const WarehouseDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const getURL = "http://localhost:8080/api/warehouses/" + id;
  const [warehouseInventory, setWarehouseInventory] = useState("");
  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        console.log("Response", response.data);
        setWarehouseInventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  if (warehouseInventory.length === 0) {
    return <h1>LOADING...</h1>;
  }
  return (
    <>
      <WarehouseDetails warehouseDetails={warehouseInventory} />
      <WarehouseInventory warehouseInventory={warehouseInventory} />
    </>
  );
};
export default WarehouseDetailsPage;