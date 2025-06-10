import React from "react";
import { useOrders } from "../hooks/useOrders";

export default function HistoryOrders() {
  const { orders } = useOrders();
  return (
    <div className="bg-white p-3">
      <h2 className="text-center">Historial de Pedidos</h2>
      {orders.map((orders) => (
        <>
          <table className="w-80 table">
            <thead>
              <div className="pt-8 font-size-small">
                <strong>Pedido</strong>: {orders.id} <br></br>
                <strong>Fecha Creación</strong>: {orders.createdAt}
              </div>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>

            {orders.items.map((item, i) => (
              <tbody>
                <tr key={i}>
                  <td>
                    <img
                      className="img-fluid-18"
                      src={`/img/${item.imageUrl}.jpg`}
                      alt="imagen guitarra"
                    />
                  </td>
                  <td className="w-20">{item.productName}</td>
                  <td className="w-20">${item.price}</td>
                  <td className="w-20">{item.quantity}</td>
                </tr>
              </tbody>
            ))}
            <tr>
              <td colSpan={4} className="text-end fw-bold pt-3 font-size">
                Total del Pedido: $
                {orders.items.reduce((acc, item) => acc + item.total, 0)}
              </td>
            </tr>
          </table>
        </>
      ))}
    </div>
  );
}
