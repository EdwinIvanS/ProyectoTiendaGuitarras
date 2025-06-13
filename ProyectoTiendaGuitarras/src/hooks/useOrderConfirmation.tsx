import Swal from "sweetalert2";
import axios from "../../node_modules/axios/index";
import { API_ROUTES } from "../config/apis";


export const useOrderConfirmation = (cart: any[], dispatch: Function) => {
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
      await axios.post(API_ROUTES.pedidos.create, orderPayload);
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

  return { handleConfirmOrder };
};