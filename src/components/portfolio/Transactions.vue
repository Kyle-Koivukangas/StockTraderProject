<template>
    <div class="table-container">
        <h4>columns: {{ columns }}</h4>
        <table>
            <thead>
                <tr>
                    <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
                        {{ key | capitalize }}
                        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in filteredData">
                    <td v-for="key in columns">
                        {{entry[key]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['transactions'],
    data() {
        return {
            sortKey: '',
            sortOrders: {},
            filterKey: ''

        }
    },
    computed: {
        getTransactions() {
            return this.$store.getters.transactions;
        },
        fontColor() {
            if (transaction.orderType == 'BUY') {
                return 'black';
            } else {
                return 'red';
            }
        },
        columns() {
            //pull the keys from a transaction to be used as columns
            return Object.keys(this.transactions[0]);
        },
        filteredData: function() {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.transactions
            if (filterKey) {
                data = data.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                data = data.slice().sort(function(a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
        }
    },
    methods: {
        sortBy(key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    },
    filters: {
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    created() {
        this.columns.forEach(function(key) {
            this.sortOrders[key] = 1
        })
    }
}
</script>

<style lang="scss"  scoped>
@import '../../styles/_variables.scss';

.table-container {
    width: 100%;
    overflow-x: auto;
    @include center--auto();
}

table {
    @include center--auto();
    border: 2px solid $mid;
    border-radius: 3px;
    background-color: #fff;
    font-size: 1em;
    @include mq("tablet-small", max) {
        font-size: .8em;
    }
}

th {
    background-color: $mid;
    color: rgba(255, 255, 255, 0.76);
    cursor: pointer;
    @include noselect();
}

td {
    background-color: white;
}

th,
td {
    // width: 1em;
    padding: 10px 20px;
}

th.active {
    color: white;
}

th.active .arrow {
    opacity: 1;
}
 
.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px; 
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}
</style>
