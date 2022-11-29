import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import EmptyState from "../../components/EmptyState/EmptyState";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./WarehouseDetailsPage.scss";
import InventoryModal from "../../components/InventoryModal/InventoryModal";

const WarehouseDetailsPage = () => {
  const { id } = useParams();
  const getURL = "http://localhost:8080/api/warehouses/" + id;
  const [warehouseInventory, setWarehouseInventory] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  console.log(warehouseInventory)
  const modalHandler = (id, modal) => {
    console.log("Inventory Id to delete", id);
    setShowModal(modal);
    setToDelete(id);
  };

  useEffect(() => {
    axios
      .get(getURL)
      .then((response) => {
        setWarehouseInventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <>
          <InventoryModal
            inventory={warehouseInventory}
            inventoryId={toDelete}
            modalHandler={modalHandler}
          />

          <div className="WarehouseDetailsPage">
            {warehouseInventory ? (
              <WarehouseDetails warehouseDetails={warehouseInventory} />
            ) : (
              <WarehouseDetails warehouseDetails={""} />
            )}
            {warehouseInventory.inventory ? (
              <WarehouseInventory
                warehouseInventory={warehouseInventory}
                modalHandler={modalHandler}
                showModal={showModal}
                id={toDelete}
              />
            ) : (
              <EmptyState message="inventory" />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="WarehouseDetailsPage">
            {warehouseInventory ? (
              <WarehouseDetails warehouseDetails={warehouseInventory} />
            ) : (
              <WarehouseDetails warehouseDetails={""} />
            )}
            {warehouseInventory.inventory ? (
              <WarehouseInventory
                warehouseInventory={warehouseInventory}
                modalHandler={modalHandler}
                showModal={showModal}
                id={toDelete}
              />
            ) : (
              <EmptyState message="inventory" />
            )}
          </div>
        </>
      )}
    </>
  );
};
export default WarehouseDetailsPage;
