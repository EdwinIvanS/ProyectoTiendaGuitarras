import { useEffect, useState } from 'react'
import { db } from "../data/dbProducts"
import { Guitar } from '../types/types';
import axios from 'axios';
import { API_ROUTES } from '../config/apis';

type SourceType = 'mock' | 'api';

interface useProductsOptions {
  source?: SourceType;
  nameProduct?: string;
}

export const useProducts = ({ source = 'mock', nameProduct = '' }: useProductsOptions = {}) => {
  const [products, setproducts] = useState<Guitar[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (source === 'mock') {
          setTimeout(() => {
            setproducts(db);
          }, 500);
        } 
        else if (source === 'api') {
          const response = await axios.get<Guitar[]>(API_ROUTES.guitarras.getAll);
          setproducts(response.data);
        }
      } catch (error) {
        console.error("Error al cargar pedidos:", error);
      }
    };

    fetchOrders();
  }, [source, nameProduct]);

  return { products };
};