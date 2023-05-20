import { defineStore } from "pinia";
import { productListExampleData } from "./product-list.example-data";
import { Product } from "./product-list.interface";

export const useProductListStore = defineStore('productList', {
    state: () => {
        const productList = new Map<string, Product>();

        productListExampleData.forEach(product => {
            productList.set(product.id, product);
        })

        return {productList}
    }
})