import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import GuitarDetail from "./components/GuitarDetail";
import Footer from "./components/Footer";
import Order from "./components/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guitarras/:id" element={<GuitarDetail />} />
          <Route path="/ordenes" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
