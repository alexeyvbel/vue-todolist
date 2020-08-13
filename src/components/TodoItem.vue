<template>
    <div v-if="!editMode" class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">
                {{title}}
            </div>
            <div class="todo-item-content-description">
                {{description}}
            </div>
        </div>
        <button class="app-button is-warning"
                @click="editMode = true">Edit</button>
        <button class="app-button is-danger"
                @click="deleteTodo">Delete</button>
    </div>
    <div v-else class="todo-item">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input v-model="todo.title"
                       class="form-input"
                       type="text">
            </div>
            <div class="form-control form-control-last">
                <label class="label">Description</label>
                <textarea v-model="todo.description"
                          cols="30"
                          rows="5"
                          class="form-input"/>
            </div>
            <button class="app-button is-warning"
                    @click.prevent="editTodo">Update</button>
            <button class="app-button is-danger"
                    @click.prevent="editMode = false">Cancle</button>
        </form>
    </div>
</template>

<script>
    import store from "@/store/index";
    export default {
        name: "TodoItem",
        data(){
            return {
                editMode: false,
                todo: {
                    _id: this._id,
                    title: this.title,
                    description: this.description
                }
            }
        },
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false,
                default: 'Default description'
            },
            _id: {
                type: String,
                required: true
            }
        },
        methods: {
            editTodo(){
                this.editMode = false
                store.dispatch('updateTodo', {...this.todo})
            },
            deleteTodo(){

            }
        }
    }
</script>

<style scoped lang="scss">
    .app-button {
        font-size: 15px;
        .is-warning{
            margin-right: 5px;
        }
    }

    .todo {
        &-item {
             background-color: gray;
             min-height: 70px;
             margin: 10px;
             padding: 10px;
             color: white;
             border-radius: 5px;
             font-size: 23px;
        &-content {
            margin-bottom: 10px;
        &-title {
             font-weight: bold;
         }

        &-description {
             font-size: 19px;
         }
        }
        }
    }
</style>