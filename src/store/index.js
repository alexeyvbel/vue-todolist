import Vue from 'vue'

const INTIAL_DATA = {
    todos: [
        {
            _id: '1',
            title: 'Изуить Swift',
            description: 'Начать изучение swift'
        },
        {
            _id: '2',
            title: 'Изуить Java',
            description: 'Продолжить изучение javarush'
        },
        {
            _id: '3',
            title: 'Изуить VueJS',
            description: 'Продолжить изучение VueJs'
        }
    ]
}

const store = {
    state: {
        todos: []
    },
    actions: {
        initStore(state) {
          const todos = localStorage.getItem('my_todos')
            if (!todos){
                Vue.set(state,'todos', INTIAL_DATA.todos)
            } else {
                Vue.set(state,'todos', JSON.parse(todos))
            }
            return state.todos
        },
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2,7)
            state.todos.push(todo)
            persistData(state.todos)
        },

        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id
            })

            Vue.set(state.todos, index, todoToUpdate)
            persistData(state.todos)
        },

        deleteTodo(state,todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoId
            })

            state.todos.splice(index, 1)
            persistData(state.todos)
        }
    }

}

function persistData(value) {
    const stringfiedValue = JSON.stringify(value)
    localStorage.setItem('my_todos',stringfiedValue)
}

store.dispatch = function (action, payload) {
    if(!this.actions[action]) throw new Error('Action ${action} is not defined in the store')
    return this.actions[action](this.state, payload);
}

export default store