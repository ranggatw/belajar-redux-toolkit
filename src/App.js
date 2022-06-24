import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ShowProduct from "./components/ShowProduct";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
      {/* <AddProduct />
      </div>
      <ShowProduct />
      <br />
      <hr />
      <EditProduct /> */}
    </BrowserRouter>
  );
}

export default App;
