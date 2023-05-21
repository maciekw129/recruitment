<script lang="ts" setup>
import { Currency, Product } from '../../product-list.interface';

const props = defineProps<{
    product: Product | null
}>()

let id = props.product?.id;
let name = props.product?.name;
let price = props.product?.price;
let discountPrice = props.product?.discountPrice;
let currency = props.product?.currency;

const getUpdatedProduct = () => {
    return {
        id,
        name,
        price,
        discountPrice,
        currency
    }
}

</script>

<template>
    <div @click="$emit('removeSelectedProduct')"
        :class="`absolute top-0 right-0 h-screen w-screen bg-black opacity-50 ${props.product ? '' : 'hidden'}`"></div>
    <div
        :class="`flex flex-col gap-4 items-center absolute h-screen right-[-500px] top-0 w-[500px] bg-white ${props.product ? 'translate-x-[-500px]' : ''}`">
        <h1 class="w-full p-4 font-bold border-b-2">Edycja produktu: {{ product === null ? '' : product.name }}</h1>
        <div class="h-44 w-44 rounded-full overflow-hidden">
            <img class="h-44" v-bind:src="product === null ? '' : product.imgUrl" />
        </div>
        <form class="w-full p-4 h-full flex flex-col justify-between">
            <fieldset class="flex flex-col items-center w-full gap-4">

                <input class="input" required placeholder="Nazwa produktu" v-model="name" />
                <input class="input" required placeholder="Cena" v-model="price" />
                <input class="input" placeholder="Promocyjna cena" v-model="discountPrice" />
                <select class="input" placeholder="Waluta" v-model="currency">
                    <option v-for="item of Currency">{{ item }}</option>
                </select>
            </fieldset>
            <div class="flex gap-2">
                <button @click.prevent="$emit('updateProduct', getUpdatedProduct())" class="button bg-[#862583] text-white">
                    Zapisz
                </button>
                <button class="button" @click="$emit('removeSelectedProduct')" type="button">
                    Anuluj
                </button>
            </div>
        </form>
    </div>
</template>