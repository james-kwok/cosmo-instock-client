import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import EmptyState from "../../components/EmptyState/EmptyState";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./WarehouseDetailsPage.scss";
const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const getURL = "http://localhost:8080/api/warehouses/" + id;
  const [warehouseInventory, setWarehouseInventory] = useState("");

  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        setWarehouseInventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("After", warehouseInventory)
  return (
    <div className="WarehouseDetailsPage">
      {warehouseInventory ? (
        <WarehouseDetails warehouseDetails={warehouseInventory} />
      ) : (
        <h1>LOADING...</h1>
      )}
      {warehouseInventory.inventory ? (
        <WarehouseInventory warehouseInventory={warehouseInventory} />
      ) : (
        <EmptyState message="inventory" />  
      )}
    </div>
  );
};
export default WarehouseDetailsPage;