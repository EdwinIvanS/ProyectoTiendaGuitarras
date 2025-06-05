import React, { createContext, useContext, useReducer } from "react";
import { CartState, CartActions } from "../reducers/cart-reducer";
import useCart from "../hooks/useCart";

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartActions>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { state, dispatch } = useCart();

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext debe usarse dentro de CartProvider");
  return context;
};

export { CartContext };
