<script lang="ts" setup>
import { Product } from '../../product-list.interface';

const props = defineProps<{
    product: Product
}>()

const { name, imgUrl, price, discountPrice, currency } = props.product;

</script>
<template>
    <div class="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-between gap-4 cursor-pointer">
        <h1 class="w-full text-left">{{ name }}</h1>
        <img class="max-h-72" v-bind:src="imgUrl" />
        <div class="flex flex-col items-center">
            <p>{{ (discountPrice ?? price) + currency }}</p>
            <p class="line-through">{{ discountPrice ? price + currency : "" }}</p>
        </div>
    </div>
</template>