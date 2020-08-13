import Vue from 'vue'

const store = {
    state: {
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
    },
    actions: {
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2,7)
            state.todos.push(todo)
        },

        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id
            })

            Vue.set(state.todos, index, todoToUpdate)
        },

        deleteTodo(state,todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoId
            })

            state.todos.splice(index, 1)

        }
    }

}

store.dispatch = function (action, payload) {
    if(!this.actions[action]) throw new Error('Action ${action} is not defined in the store')
    return this.actions[action](this.state, payload);
}

export default store