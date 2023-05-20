<script lang="ts" setup>

const todoName: string = '';

</script>
<template>
    <form @submit.prevent="$emit('addTodo', todoName)">
        <button>+</button>
        <input v-model="todoName" />
    </form>
</template>