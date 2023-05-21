import { defineStore } from "pinia";
import { productListExampleData } from "./product-list.example-data";
import { Product } from "./product-list.interface";

export const useProductListStore = defineStore('productList', {
    state: () => {
        const productList = new Map<string, Product>();

        productListExampleData.forEach(product => {
            productList.set(product.id, product);
        })

        return {
            productList,
            selectedProduct: null as Product | null
        }
    },
    getters: {
        isModalVisible: state => !!state.selectedProduct
    },
    actions: {
        removeSelectedProduct() {
            this.selectedProduct = null;
        },
        selectProductById(productId: string) {
            console.log("asd");
            
            this.selectedProduct = this.productList.get(productId)!;
        },
        updateProduct(product: Product) {
            console.log(product.id);
            
            
            this.productList.set(product.id, product);
        }
    }
})