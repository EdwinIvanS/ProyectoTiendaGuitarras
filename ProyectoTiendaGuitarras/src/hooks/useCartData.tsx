import React, { useMemo } from 'react'
import useCart from './useCart';

export default function useCartData() {
  const { state: { cart }, dispatch } = useCart();

  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  }, [cart]);

  return {
    cart,
    dispatch,
    isEmpty,
    cartTotal,
  };
}
