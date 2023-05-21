<script lang="ts" setup>
import TodoList from '../../features/todo-list/TodoList.vue';
import ProductList from '../../features/product-list/ProductList.vue';
import SingleProduct from '../../features/product-list/components/singleProduct/SingleProduct.vue';
import ProductModal from '../../features/product-list/components/productModal/ProductModal.vue';
import { useProductListStore } from '../../features/product-list/product-list.store';
import { Product } from '../../features/product-list/product-list.interface';

const store = useProductListStore();

const handleSelectProduct = (productId: string) => {
    store.selectProductById(productId);
}

const handleRemoveSelectedProduct = () => {
    store.removeSelectedProduct();
}

const handleUpdateProduct = (product: Product) => {

    store.updateProduct(product);

}

</script>

<template>
    <h1 class="font-bold">Muscode App</h1>
    <main class="grid grid-cols-3 gap-2 w-full py-4">
        <TodoList></TodoList>
        <ProductList class="col-span-2"></ProductList>
        <SingleProduct @selectProduct="handleSelectProduct($event)" v-for="[key, value] in store.productList"
            v-bind:product="value"></SingleProduct>
        <ProductModal v-if="store.isModalVisible" @updateProduct="handleUpdateProduct($event)"
            @removeSelectedProduct="handleRemoveSelectedProduct()" :product="store.selectedProduct">
        </ProductModal>
    </main>
</template>
