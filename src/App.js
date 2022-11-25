import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
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
<<<<<<< HEAD
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />

=======
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/warehouses" />} />
>>>>>>> 062ce2be2e4ea98f00ca01605683f62a030348dc
          <Route path="/warehouses" element={<WarehouseListPage />} />
          <Route path="/warehouses/add" element={<WarehousesAdd />} />
          <Route path="/warehouses/edit/:id" element={<WarehousesEdit />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />

          <Route path="/inventory" element={<InventoryList />} />
          {/* <Route path="/inventory/add" element={<InventoryAdd />} />
          <Route path="/inventory/edit/:id" element={<InventoryEdit />} />
<<<<<<< HEAD
          <Route path="/inventory/:id" element={<InventoryDetails />} /> */}

=======
          <Route path="/inventory/:id" element={<InventoryDetails />} />
>>>>>>> 062ce2be2e4ea98f00ca01605683f62a030348dc
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;