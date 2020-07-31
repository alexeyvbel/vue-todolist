<template>
    <div class="modal" :class="{'is-active':isActive}">
        <div class="modal-content">
            Modal window
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        data () {
            return {
                isActive: false
            }
        }
    }
</script>

<style scoped lang="scss">


    .modal {
        display: none;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);

        &.is-active {
            display: block;
        }
    }

    .modal-content{
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
</style>