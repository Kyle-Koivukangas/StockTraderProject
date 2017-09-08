<template>
    <div class="component-container stock-component">
        <div class="stock-header">
            <h3 class="text-center">{{ stock.name }}</h3>
        </div>
        <div class="info">
            <ul>
                <li>Ticker: {{ stock.ticker }}</li>
                <li>Price: {{ stock.price }}</li>
                <li>Change: {{ exampleInfo.change }} <i class="fa fa-arrow-down" aria-hidden="true"> </i></li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            exampleInfo: {
                ticker: "TICKER",
                price: "$50.54",
                change: "Down .50"
            },
            stockChange: "up 0.54",
        }

    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

.stock-component {
    background-color: white;
    margin: 10px;
    @include border-radius(5px);
    border: 1.2px solid $dark;
    padding-top: 0px;
}

.stock-header {
    background-color: $transDark;
    vertical-align: top;
    margin-top: 0px;
}
.info {
    font-family: $font2;
}

h3 {
    font-family: $font2;
    font-weight: 400;
    margin-top: 0px;
}
ul {
    list-style-type: none;
}
li i {
    color: red;
}
</style>