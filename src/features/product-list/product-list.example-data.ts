import { generateId } from "../../shared/helpers/generateId";
import { Currency, Product } from "./product-list.interface";

export const productListExampleData: Product[] = [
    {
        id: generateId(),
        name: 'iPhone 6s Plus 16GB',
        discountPrice: 649,
        price: 1000,
        imgUrl: '/img1.png',
        currency: Currency.USD
    },
    {
        id: generateId(),
        name: 'iPad Pro 32GB',
        discountPrice: 600,
        price: 800,
        imgUrl: '/img2.png',
        currency: Currency.USD
    },
    {
        id: generateId(),
        name: 'MacBook Pro',
        discountPrice: null,
        price: 8000,
        imgUrl: '/img3.png',
        currency: Currency.PLN
    },
]