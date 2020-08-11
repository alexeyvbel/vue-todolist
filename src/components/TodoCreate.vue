<template>
    <modal>
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input v-model="form.title"
                       class="form-input"
                       type="text">
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea v-model="form.description"
                          cols="30"
                          rows="5"
                          class="form-input"/>
            </div>
            <button @click="submitForm"
                    type="button"
                    class="app-button is-primary">Confirm</button>
        </form>
    </modal>
</template>

<script>

    import Modal from "@/components/Modal";
    export default {
        name: "TodoCreate",
        components: { Modal},
        data () {
            return {
                form: {
                    title: '',
                    description: ''
                }

            }
        },
        methods: {
            submitForm(){
                this.$emit('formSubmitted', {...this.form})
                this.resertForm()
            },

            resertForm(){
                this.form.title = ''
                this.form.description = ''
            }
        }
    }
</script>

<style scoped>

</style>