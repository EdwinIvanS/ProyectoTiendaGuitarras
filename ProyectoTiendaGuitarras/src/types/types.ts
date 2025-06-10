export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

export type OrderItem = {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  total: number;
  imageUrl: string;
}

export type Order = {
  id: string;
  customerName: string;
  createdAt: string; 
  status: 'CREATED' | 'SHIPPED' | 'CANCELLED'; 
  items: OrderItem[];
}