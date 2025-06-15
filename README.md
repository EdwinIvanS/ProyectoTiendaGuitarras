# 🎸 oroCuerda - Tienda de Guitarras

Aplicación web construida con **React + TypeScript** para la venta, gestión y visualización de guitarras, pedidos y carrito de compras. Este proyecto simula una experiencia completa de e-commerce especializada en instrumentos musicales.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React
- ⌨️ TypeScript
- 🎨 Tailwind CSS
- 🔀 React Router DOM
- 📦 Context API + useReducer
- 💬 SweetAlert2
- 🌐 Axios (para consumo de API)
- 📄 JSON Server / API REST (para simular backend)

---

## 📦 Instalación

# Clonar el repositorio
git clone https://github.com/EdwinIvanS/ProyectoTiendaGuitarras.git
cd ProyectoTiendaGuitarras

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

## 🛒 Funcionalidades

Agregar y eliminar productos al carrito.

Confirmar pedidos.

Ver historial de pedidos por nombre de cliente.

Alertas de confirmación con SweetAlert2.

Consumo de datos desde API simulada (productos y pedidos).

Navegación mediante React Router.

## 📂 Estructura del Proyecto

├── public/

├── src/

│   ├── components/

│   ├── config/

│   ├── context/

│   ├── data/

│   ├── hooks/

│   ├── pages/

│   ├── reducers/

│   ├── types/

│   └── App.tsx

├── README.md

├── package.json



# 🧩 Integracion con Backend - Microservicios con Spring Cloud (Java 21)
Este proyecto implementa un ecosistema de microservicios basado en Spring Boot 3, Spring Cloud 2024.0.0, Java 21 y Eureka para descubrimiento de servicios. La arquitectura incluye:
- ✅ **Eureka Server** (Service Registry)
- ✅ **Config Server** (Centralización de configuración)
- ✅ **Gateway Service** (Gateway API con Spring Cloud Gateway)
- ✅ **Microservicio de Productos**
- ✅ **Microservicio de Órdenes**

## 📦 Estructura del Proyecto
microservices-project/
│

├── config-server/ # Servidor de configuración

├── eureka-server/ # Servidor de descubrimiento

├── gateway/ # Gateway para enrutamiento

├── microservice-product/ # Microservicio de productos

├── microservice_orders/ # Microservicio de órdenes

├── utileria/ # Script y coleccion de postman

└── README.md

## ⚙️ Requisitos previos
- Java 21 instalado
- Maven 3.8+
- IDE como IntelliJ o VSCode
- Puerto 8761, 8888, 8080, 8081 y 8082 disponibles

## 🚀 Cómo ejecutar el proyecto localmente
### Paso 1: Clonar el repositorio
bash git clone https://github.com/EdwinIvanS/ProyectoTiendaGuitarrasBackend.git

## 🚀 Ejecutar los servicios en orden

1- Ejecutar Config Server

2- Ejecutar Eureka Server

3- Ejecutar Gateway

4- Ejecutar microservicio de productos

5- Ejecutar microservicio de órdenes


🔀 Rutas disponibles (a través del Gateway)
Servicio	 Ruta Gateway	 Redirige a

Productos	 /products/**	 lb://MICROSERVICE-PRODUCT

Órdenes	   /orders/**	   lb://MICROSERVICE-ORDERS

## 🧪 Pruebas
### MICROSERVICE - ORDERS
#### Port Gateway
  - [Get] http://localhost:8080/orders/api/pedidos
  - [Get] http://localhost:8080/orders/api/pedidos/5bdb94fa-0b75-422e-9cad-205d924026fc
  - [Get] http://localhost:8080/orders/api/pedidos/byCustomer?customerName=Edwin Ivan S
  - [Post] http://localhost:8080/orders/api/pedidos
  - [Put] http://localhost:8080/orders/api/pedidos/293e6f94-25e7-43ff-8af8-fbfbe8be2b06
  - [Delete] http://localhost:8080/orders/api/pedidos/78a1d5be-0664-4b21-93cb-d8da5a5fbcc7

#### Port 8082
  - [Get] http://localhost:8082/api/pedidos
  - [Get] http://localhost:8082/api/pedidos/123e4567-e89b-12d3-a456-426614174000
  - [Get] http://localhost:8082/api/pedidos/byCustomer?customerName=Edwin Ivan S
  - [Post] http://localhost:8082/api/api/pedidos
  - [Put] http://localhost:8082/api/pedidos/293e6f94-25e7-43ff-8af8-fbfbe8be2b06
  - [Delete] http://localhost:8082/api/pedidos/78a1d5be-0664-4b21-93cb-d8da5a5fbcc7

### MICROSERVICE - PRODUCTS
#### Port Gateway
  - [Get] http://localhost:8080/products/api/guitarras
  - [Get] http://localhost:8080/products/api/guitarras/1
  - [Get] http://localhost:8080/products/api/guitarras/name/Lukather
  - [Post] http://localhost:8080/products/api/guitarras
  - [Put] http://localhost:8080/products/api/guitarras/13
  - [Delete] http://localhost:8080/products/api/guitarras/13
