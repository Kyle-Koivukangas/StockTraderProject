<template>
    <div class="modal-mask" @click="close">
        <div class="modal-wrapper" > 
            <div class="modal-container" @click.stop>

                <div class="modal-header">
                    <slot name="header">
                        <h3 class="text-center">Purchase Stock</h3>
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        default body
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot  name="footer">
                        <span style="color: white;">.</span>
                        <button class="modal-default-button" @click="$emit('close')">
                            OK
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    template: '#modal-template',
    props: ['show'],
    data: function() {
        return {
            title: '',
            body: ''
        };
    },
    methods: {
        close: function() {
            console.log('closing modal');
            this.$emit('close');
            this.title = '';
            this.body = '';
        },
        savePost: function() {
            // Some save logic goes here...

            this.close();
        }
    },
    mounted: function() {
        document.addEventListener("keydown", (e) => {
            if (this.show && e.keyCode == 27) {
                this.close();
                console.log('closing modal');

            }
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

h3 {
    font-family: $font2;
    margin-top: 0px;
    color: black !important;
}


.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 0;
    background-color: $lightFontColor;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 0px 0;
}

.modal-default-button {
    float: right;
}



</style>
