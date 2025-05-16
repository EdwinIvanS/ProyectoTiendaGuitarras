import React from 'react'
import { CartActions } from '../reducers/cart-reducer';
import { CartItem } from '../types/types';
import Cart from './CartShopping';

type HeaderProps = {
  cart: CartItem[];
  dispatch: React.Dispatch<CartActions>;
};

export default function Header({ cart, dispatch }: HeaderProps) { 
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
          <Cart cart={cart} dispatch={dispatch} />
          </nav>
        </div>
      </div>
    </header>
  )
}
