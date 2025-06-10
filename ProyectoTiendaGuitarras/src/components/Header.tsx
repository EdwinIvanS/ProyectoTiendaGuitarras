import React from "react";
import Cart from "./CartShopping";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { state, dispatch } = useCartContext();
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row display-header justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="/">
              <img
                className="img-fluid"
                src="/img/Logo.png"
                alt="imagen logo"
              />
            </a>
          </div>
          <div className="col-8 col-md-3 mt-5">
            <ul className="text-init flex-text font-size">
              <Link to={`/mision`}>
                <li>Misión</li>
              </Link>
              <Link to={`/vision`}>
                <li>Visión</li>
              </Link>
              <Link to={`/historialPedidos`}>
                <li>Historial</li>
              </Link>
            </ul>
          </div>
          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
            <Cart cart={state.cart} dispatch={dispatch} />
          </nav>
        </div>
      </div>
    </header>
  );
}
