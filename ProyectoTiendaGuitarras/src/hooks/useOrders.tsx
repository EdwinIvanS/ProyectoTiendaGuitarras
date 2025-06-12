import { useEffect, useState } from 'react'
import { orders as ordersData} from "../data/dbOrders" 
import { Order } from '../types/types';
import axios from 'axios';
import { API_ROUTES } from '../config/apis';

type SourceType = 'mock' | 'api';

interface UseOrdersOptions {
  source?: SourceType;
  customerName?: string;
}

export const useOrders = ({ source = 'mock', customerName = '' }: UseOrdersOptions = {}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (source === 'mock') {
          setTimeout(() => {
            setOrders(ordersData);
          }, 500);
        } 
        else if (source === 'api') {
          const response = await axios.get<Order[]>(API_ROUTES.pedidos.byCustomer(customerName));
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Error al cargar pedidos:", error);
      }
    };

    fetchOrders();
  }, [source, customerName]);

  return { orders };
};