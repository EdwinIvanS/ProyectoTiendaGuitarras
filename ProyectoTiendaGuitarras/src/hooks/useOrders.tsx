import { useEffect, useState } from 'react'
import { orders as ordersData} from "../data/dbOrders" 
import { Order } from '../types/types';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setOrders(ordersData);
    }, 500);
  }, []);

  return { orders };
}
