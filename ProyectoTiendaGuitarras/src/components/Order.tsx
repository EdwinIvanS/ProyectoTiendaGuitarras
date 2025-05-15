import React, { useMemo } from "react";
import { CartItem } from "../types/types";
import { CartActions } from "../reducers/cart-reducer";

type OrderProps = {
  cart: CartItem[];
  dispatch: React.Dispatch<CartActions>;
};

export default function Order({ cart, dispatch }: OrderProps) {
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return (
    <div className="bg-white p-3">
      <table className="w-60 table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((guitar) => (
            <tr key={guitar.id}>
              <td>
                <img
                  className="img-fluid-40"
                  src={`/img/${guitar.image}.jpg`}
                  alt="imagen guitarra"
                />
              </td>
              <td className="w-20">{guitar.name}</td>
              <td className="w-20 fw-bold">${guitar.price}</td>
              <td className="w-20 flex align-items-start gap-4">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() =>
                    dispatch({
                      type: "decrease-quantity",
                      payload: { id: guitar.id },
                    })
                  }
                >
                  -
                </button>
                {guitar.quantity}
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() =>
                    dispatch({
                      type: "increase-quantity",
                      payload: { id: guitar.id },
                    })
                  }
                >
                  +
                </button>
              </td>
              <td className="align-content">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "remove-from-cart",
                      payload: { id: guitar.id },
                    })
                  }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="justify-self">
        <strong>Total pagar : </strong>
        <span className="fw-bold">${cartTotal}</span>
      </p>
      {isEmpty ? (
        <p className="text-center"><strong>El carrito esta vacio</strong></p>
      ) : (
        <div className="display-flex-center">
          <button
            className="btn btn-dark w-70 mt-3 p-2"
            onClick={() => dispatch({ type: "clear-cart" })}
          >
            Confirmar Pedido
          </button>
        </div>
      )}
    </div>
  );
}
