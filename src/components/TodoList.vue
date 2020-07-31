<template>
    <div class="todo-list">
        <todo-item :title="'Изучить Swift'"
                   :description="'Начать изучение Swift'"/>
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