<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos"/>
        <div class="todo-create-btn-container">
          <todo-create @formSubmitted="createTodo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";
import store from "@/store";

export default {
  name: 'App',
  components: {TodoCreate, TodoList},
  data() {
    return {
      todos: store.state.todos
    }
  },

  methods: {
    createTodo(todo) {
      store.dispatch('createTodo', todo)
    }
  },

  created() {
    this.todos = store.dispatch('initStore' )
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.app-error {
  color: #ff1212
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
}

.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .form-input {
    padding: 10px;
    font-size: 17px;
  }

  .form-input {
    padding: 10px;
    font-size: 19px;
  }

  .form-control {
    margin-bottom: 10px;
    &-last{
      margin-bottom: 0px;
    }
  }
}



.is-primary {
  background-color: #47ca47 !important;
}

.is-warning {
  background-color: #ffa753 !important;
}

.is-danger {
  background-color: #ff5a5a !important;
}

.todo {
  &-create-btn-container{
    margin: 10px;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 2000px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    min-height: 200px;
    background-color: #ededed;
    border-radius: 5px;
  }
}
</style>
