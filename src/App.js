import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header.jsx";

import WarehousesDetails from "./components/WarehouseDetails/WarehouseDetails.jsx";
import WarehouseListPage from "./pages/WarehouseList/WarehouseListPage.jsx";
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
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
          <Route path="/warehouses" element={<WarehouseListPage />} />
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
    </>
  );
}

export default App;
