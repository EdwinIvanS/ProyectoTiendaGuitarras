const BASE_PEDIDOS_URL = "http://localhost:8080/orders/api/pedidos";
const BASE_GUITARRAS_URL = "http://localhost:8080/products/api/guitarras";

export const API_ROUTES = {
  pedidos: {
    getAll: `${BASE_PEDIDOS_URL}`,
    getById: (id: string) => `${BASE_PEDIDOS_URL}/${id}`,
    byCustomer: (customerName: string) =>
      `${BASE_PEDIDOS_URL}/byCustomer?customerName=${encodeURIComponent(customerName)}`,
    create: `${BASE_PEDIDOS_URL}`,
    update: (id: string) => `${BASE_PEDIDOS_URL}/${id}`,
    delete: (id: string) => `${BASE_PEDIDOS_URL}/${id}`,
  },

  guitarras: {
    getAll: `${BASE_GUITARRAS_URL}`,
    getById: (id: string) => `${BASE_GUITARRAS_URL}/${id}`,
    getByName: (name: string) =>
      `${BASE_GUITARRAS_URL}/name/${encodeURIComponent(name)}`,
    create: `${BASE_GUITARRAS_URL}`,
    update: (id: string) => `${BASE_GUITARRAS_URL}/${id}`,
    delete: (id: string) => `${BASE_GUITARRAS_URL}/${id}`,
  },
};