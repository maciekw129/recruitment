<script lang="ts" setup>
import { Todo } from '../../todo-list.interface';

defineProps<{
    todo: Todo
}>()
</script>

<template>
    <li class="flex border-b-[1px] border-b p-1 gap-1 break-words">
        <input @click="$emit('toggleIsCompleted', todo.id)" type="checkbox" :checked="todo.isCompleted" />
        <p class="text-clip w-full">{{ todo.todoName }}</p>
    </li>
</template>