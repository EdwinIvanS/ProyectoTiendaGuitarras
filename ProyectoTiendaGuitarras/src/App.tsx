import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import GuitarDetail from "./components/GuitarDetail";
import Footer from "./components/Footer";
import Order from "./components/Order";
import useCart from "./hooks/useCart";

function App() {
  
  const { state, dispatch } = useCart();

  return (
    <>
      <BrowserRouter>
        <Header cart={state.cart} dispatch={dispatch} />
        <Routes>
          <Route
            path="/"
            element={<Home data={state.data} dispatch={dispatch} />}
          />
          <Route
            path="/guitarras/:id"
            element={<GuitarDetail dispatch={dispatch} />}
          />
          <Route
            path="/ordenes"
            element={<Order cart={state.cart} dispatch={dispatch} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
