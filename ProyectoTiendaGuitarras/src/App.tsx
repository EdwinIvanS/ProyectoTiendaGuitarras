import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import GuitarDetail from "./components/GuitarDetail";
import Footer from "./components/Footer";
import Order from "./components/Order";
import Mision from "./pages/Mision";
import Vision from "./pages/Vision";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guitarras/:id" element={<GuitarDetail />} />
          <Route path="/ordenes" element={<Order />} />
          <Route path="/mision" element={<Mision />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
