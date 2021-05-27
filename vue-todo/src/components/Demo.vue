<template>
    <div id="root"></div>
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
        // originalPrice() {
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice() {
        //     return this.$store.getters.triplePrice;
        // }
    }
}
</script>

<style scoped>

</style>
