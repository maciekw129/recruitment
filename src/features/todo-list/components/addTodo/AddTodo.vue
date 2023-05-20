<script lang="ts" setup>

const todoName: string = '';

</script>
<template>
    <form @submit.prevent="$emit('addTodo', todoName)" class="flex border-b-[1px] border-b p-1 gap-1">
        <button>+</button>
        <input v-model="todoName" required maxlength="50" placeholder="Dodaj nowy elemeny checklisty"
            class="w-full border-none" />
    </form>
</template>