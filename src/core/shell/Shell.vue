<script lang="ts" setup>
import TodoList from '../../features/todo-list/TodoList.vue';
import ProductList from '../../features/product-list/ProductList.vue';
</script>

<template>
    <h1 class="font-bold">Muscode App</h1>
    <main class="grid grid-cols-3 gap-2 w-full py-4">
        <TodoList></TodoList>
        <ProductList class="col-span-2"></ProductList>
    </main>
</template>
