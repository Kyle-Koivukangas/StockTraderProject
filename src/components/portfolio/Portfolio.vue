<template>
    <div class="component-container">
        <div class="title-box">
            <h2 class="text-center">Your stock portfolio</h2>
            <hr>
        </div>

        <div class="content">
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.title-box {
    @include center--auto();
    font-family: $font1;
    width: 90%;
}
.content {
    @include center--auto();
    width: 90%;
    font-family: $font2;
    min-height: 500px;
    background-color: white;
    border: 1.2px solid $dark;
    @include border-radius(3px);

}

</style>