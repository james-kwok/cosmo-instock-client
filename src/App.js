import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehousesAdd from "./components/WarehouseAdd/WarehouseAdd";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryEdit from "./components/InventoryEdit/InventoryEdit.jsx";
import InventoryAdd from "./components/InventoryAdd/InventoryAdd.jsx";
import WarehousesEdit from "./components/WarehouseEdit/WarehouseEdit.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

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
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />

          <Route path="/inventory" element={<InventoryListPage />} />
          <Route path="/inventory/add" element={<InventoryAdd />} />
          <Route path="/inventory/edit/:id" element={<InventoryEdit />} />
          <Route path="/inventory/:id" element={<InventoryDetailsPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
