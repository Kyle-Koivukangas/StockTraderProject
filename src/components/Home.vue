<template>
    <div class="component-container">
        <div class="title-box">
            <h1 class="text-center">Stock Trader Home</h1>
            <hr>
        </div>

        <div class="content">
            <br>
            <p>Welcome to Stock Trader! Your online stock marketplace.</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi iure, dolor, accusantium natus dignissimos earum laborum asperiores nesciunt id explicabo sunt aliquam repellat inventore, vitae placeat excepturi sint reprehenderit. </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

    },

}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.title-box {
    @include center--auto();
    font-family: $font1;
    width: 90%;
}
.content {
    @include center--auto();
    width: 90%;
    font-family: $font2;
}
</style>