<script lang="ts" setup>
import { useProductListStore } from './product-list.store.js'

const store = useProductListStore();
</script>

<template>
    <section class="bg-white rounded-lg shadow-md p-4">
        <table class="w-full text-left">
            <thead>
                <th>#</th>
                <th>NAZWA</th>
                <th>PROMOCYJNA CENA</th>
                <th>CENA</th>
                <th>WALUTA</th>
            </thead>
            <tbody>
                <tr v-for="[key, value], index in store.productList" class="border-b-[1px]">
                    <td>{{ index }}</td>
                    <td>{{ value.name }}</td>
                    <td>{{ value.discountPrice ?? '' }}</td>
                    <td>{{ value.price }}</td>
                    <td>{{ value.currency }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>