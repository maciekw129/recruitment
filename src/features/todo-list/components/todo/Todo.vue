<script lang="ts" setup>
import { Todo } from '../../todo-list.interface';

defineProps<{
    todo: Todo
}>()
</script>

<template>
    <li class="flex border-b-[1px] border-black">
        <input type="checkbox" :checked="todo.isCompleted" />
        <p>{{ todo.text }}</p>
    </li>
</template>