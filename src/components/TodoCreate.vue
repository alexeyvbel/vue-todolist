<template>
    <modal ref="modal">
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
                },
                forceClose: false

            }
        },
        computed: {
            isFormValid(){
                return this.form.title.length > 8 && this.form.description.length > 10 ? true : false
            },
            modal(){
                return this.$refs.modal
            }

        },
        methods: {
            submitForm(){
                if (this.isFormValid()) {
                    this.$emit('formSubmitted', {...this.form})
                    // this.forceClose = true
                    // this.$nextTick(() => this.forceClose = false)
                    this.modal.close()
                    this.resertForm()
                }
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