import React, { useMemo } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { API_ROUTES } from "../config/apis";
import axios from "axios";

export default function Order() {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

 const handleConfirmOrder = async () => {
    const { value: customerName } = await Swal.fire({
      title: "Confirma tu pedido",
      input: "text",
      inputLabel: "Nombre del cliente",
      inputPlaceholder: "Ingresa tu nombre",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
        if (!value) return "¡Debes ingresar tu nombre!";
        return null;
      },
    });

    if (!customerName) return;

    const orderPayload = {
      customerName,
      items: cart.map((item) => ({
        productId: item.id,
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
        imageUrl: item.image,
      })),
    };

    try {
      const response = await axios.post(
        API_ROUTES.pedidos.create,
        orderPayload
      );
      dispatch({ type: "clear-cart" });

      Swal.fire(
        "¡Pedido Confirmado!",
        "Tu pedido ha sido procesado con éxito.",
        "success"
      );
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      Swal.fire(
        "Error",
        "Hubo un problema al procesar tu pedido. Inténtalo de nuevo más tarde.",
        "error"
      );
    }
  };

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
        <>
          <p className="text-center">
            <strong>El carrito esta vacio</strong>
          </p>
          <div className="display-flex-center">
            <Link to={`/`} onClick={() => window.scrollTo(0, 0)}>
              <button className="btn btn-dark w-70 mt-3 p-2">Volver</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="display-flex-center">
          <button
            className="btn btn-dark w-70 mt-3 p-2"
            onClick={handleConfirmOrder}
          >
            Confirmar Pedido
          </button>
        </div>
      )}
    </div>
  );
}
