import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Homepage from "./pages/home/Homepage";

import Sign from "./pages/signin/Sign";
import Cartpage from "./pages/cart/Cartpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Homepage />} />
          </Route>
          <Route path="sign" element={<Sign />} />
          <Route path="Cartpage" element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
