import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import WarehousesDetails from "./components/WarehouseDetails/WarehouseDetails.jsx";
import WarehousesList from "./components/WarehouseList/WarehouseList.jsx";
import WarehousesEdit from "./components/WarehouseEdit/WarehouseEdit.jsx";
import WarehousesAdd from "./components/WarehouseAdd/WarehouseAdd.jsx";

import InventoryDetails from "./components/InventoryDetails/InventoryDetails.jsx";
import InventoryList from "./components/InventoryList/InventoryList.jsx";
import InventoryEdit from "./components/InventoryEdit/InventoryEdit.jsx";
import InventoryAdd from "./components/InventoryAdd/InventoryAdd.jsx";

import NotFound from "./components/NotFound/NotFound.jsx";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <InventoryList />
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />

          <Route path="/warehouses" element={<WarehousesList />} />
          <Route path="/warehouses/add" element={<WarehousesAdd />} />
          <Route path="/warehouses/edit/:id" element={<WarehousesEdit />} />
          <Route path="/warehouses/:id" element={<WarehousesDetails />} />

          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/inventory/add" element={<InventoryAdd />} />
          <Route path="/inventory/edit/:id" element={<InventoryEdit />} />
          <Route path="/inventory/:id" element={<InventoryDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <Modal warehouseName={"Washington"} /> */}
    </>
  );
}

export default App;
