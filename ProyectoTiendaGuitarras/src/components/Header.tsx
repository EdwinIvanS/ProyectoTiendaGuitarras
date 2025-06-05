import React from 'react'
import Cart from './CartShopping';
import { useCartContext } from '../context/CartContext';

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
          <nav className="col-md-6 mt-5 d-flex align-items-start justify-content-end">
          <Cart cart={state.cart} dispatch={dispatch} />
          </nav>
        </div>
      </div>
    </header>
  )
}
