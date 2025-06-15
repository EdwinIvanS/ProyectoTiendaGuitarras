import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useOrders } from "../hooks/useOrders";

export default function HistoryOrders() {  
  const { orders } = useOrders({ source: "mock" });
  //const { orders } = useOrders({ source: "api", customerName: "Edwin Ivan S" });

  useEffect(() => {
    if (orders.length === 0) {
      Swal.fire({
        title: "Cargando pedidos...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close(); 
    }
  }, [orders]);

  return (
    <div className="bg-white p-3">
      <h2 className="text-center">Historial de Pedidos</h2>
      {orders.map((orders) => (
        <div className="box-shadow m-40 p-40" key={orders.id}>
          <table className="w-80 table">
            <thead>
              <tr>
                <th colSpan={4} className="font-size-small text-start">
                  Cliente: {orders.customerName} <br />
                  Pedido: {orders.id} <br />
                  Fecha Creación: {orders.createdAt}
                </th>
              </tr>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {orders.items.map((item) => (
                <tr key={item.productId}>
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
              ))}
              <tr>
                <td colSpan={4} className="text-end fw-bold pt-3 font-size">
                  Total del Pedido: $
                  {orders.items.reduce((acc, item) => acc + item.total, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
