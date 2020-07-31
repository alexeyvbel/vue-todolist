<template>
    <div>
        <div class="app-button"
             @click="isOpen = true">
            Create
        </div>
        <div class="modal" :class="{'is-active':isOpen}">
            <div class="modal-content">
            <span class="close"
                  @click="isOpen = false">
                &times;
            </span>
                <p>
                    Modal window
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        data () {
            return {
                isOpen: false

            }
        },
        props: {

        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">

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

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        line-height: 8px;

        &:hover {
            cursor: pointer;
        }
    }


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