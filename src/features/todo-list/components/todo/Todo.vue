<script lang="ts" setup>
import { Todo } from '../../todo-list.interface';

defineProps<{
    todo: Todo
}>()
</script>

<template>
    <li class="flex border-b-[1px] border-black">
        <input @click="$emit('toggleIsCompleted', todo.id)" type="checkbox" :checked="todo.isCompleted" />
        <p>{{ todo.todoName }}</p>
    </li>
</template>