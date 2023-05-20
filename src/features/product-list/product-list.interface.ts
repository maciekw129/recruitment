export interface Product {
    id: string,
    name: string,
    discount: number | null,
    price: number,
    imgUrl: string,
    currency: Currency,
}

export enum Currency {
    PLN = 'PLN',
    USD = '$'
}