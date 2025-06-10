import { Order } from "../types/types";

export const orders: Order[] = [
    {
        id: "123e4567-e89b-12d3-a456-426614174000",
        customerName: "Juan Pérez",
        createdAt: "2025-05-23T12:42:30",
        status: "CREATED",
        items: [
            {
                productId: 1,
                productName: "Lukather",
                price: 299,
                quantity: 2,
                total: 598,
                imageUrl: "guitarra_01"
            }
        ]
    },
    {
        id: "78a1d5be-0664-4b21-93cb-d8da5a5fbcc7",
        customerName: "Juan Pérez",
        createdAt: "2025-05-23T15:16:37",
        status: "CREATED",
        items: [
            {
                productId: 2,
                productName: "SRV",
                price: 349,
                quantity: 1,
                total: 349,
                imageUrl: "guitarra_02"
            },
            {
                productId: 3,
                productName: "Borland",
                price: 329,
                quantity: 4,
                total: 1316,
                imageUrl: "guitarra_03"
            },
            {
                productId: 12,
                productName: "Hazel",
                price: 379,
                quantity: 3,
                total: 1137,
                imageUrl: "guitarra_12"
            }
        ]
    }
];