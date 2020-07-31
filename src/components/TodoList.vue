<template>
    <div class="todo-list">
        <todo-item/>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem}
    }
</script>

<style scoped lang="scss">


</style>