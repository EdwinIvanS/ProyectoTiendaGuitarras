import { useEffect, useReducer } from 'react';
import { cartReducer, initialState, CartState, CartActions } from '../reducers/cart-reducer';

interface UseCartResult {
  state: CartState;
  dispatch: React.Dispatch<CartActions>;
}

const useCart = (): UseCartResult  => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return { state, dispatch };
}

export default useCart;