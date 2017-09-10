

export const vuefireMixin = {
    data() {
        return {

        }
    },
    firebase() {
        return {
            user: db.ref("users/" + this.userId),
            ownedStocks: db.ref("users/" + this.userId + "/ownedStocks"),
            transactions: db.ref("users/" + this.userId + "/transactions"),
            name: db.ref("users/" + this.userId + "/name")
        }
    },
    computed: {
        userId() {
            return this.$store.getters.userId;
        },
        funds() {
            return this.user[userId]['.value'];
        },
        name() {
            return this.user[1]['.value'];
        }
    },

}