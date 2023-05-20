<script lang="ts" setup>
import { useTodosStore } from './todo-list.store.js';
import Todo from './components/todo/Todo.vue';
import AddTodo from './components/addTodo/AddTodo.vue'

const store = useTodosStore();

const handleAddTodo = (todoName: string) => {
    store.addTodo(todoName);
}

const handleToggleIsCompleted = (todoId: string) => {
    store.toggleIsCompleted(todoId);
}

</script>

<template>
    <div class="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2">
        <div class="flex justify-between">
            <h2 class="font-bold">Lista todo</h2>
            <p class="font-bold">Wykonane: {{ store.todosCompletedSize }}</p>
        </div>

        <ul>
            <Todo @toggleIsCompleted="handleToggleIsCompleted($event)" v-for="[key, value] in store.todoList" class="w-full"
                :todo="value" />
            <AddTodo @addTodo="handleAddTodo($event)"></AddTodo>
        </ul>

    </div>
</template>