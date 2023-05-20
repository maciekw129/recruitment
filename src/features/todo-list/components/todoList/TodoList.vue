<script lang="ts" setup>
import { useTodosStore } from '../../todo-list.store';
import Todo from '../todo/Todo.vue';

const { todosList, todosCompletedSize } = useTodosStore();
</script>

<template>
    <div class="p-1">
        <div class="flex justify-between">
            <h2 class="font-bold">Lista todo</h2>
            <p class="font-bold">Wykonane: {{ todosCompletedSize }}</p>
        </div>

        <ul v-for="todo in todosList">
            <Todo class="w-full" :todo="todo" />
        </ul>
    </div>
</template>