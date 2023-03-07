<template>
    <div class="container content">
        <h1 class="title has-text-centered">Report History for Booking_{{ $route.params.booking_id }}</h1>
        <ReportDay />
    </div>
</template>
<script>
import ReportDay from './ReportDay.vue'
import { mapGetters } from 'vuex'
// import { useStore } from 'vuex'
export default {
    name: "Report",
    props: {

    },
    computed: {
        // ...mapGetters['getReportItem', 'getUser'],
    },
    components: {
        ReportDay,
    },
    created() {
        const data = {
            user_id: this.$store.getters.getUser.user_id,
            booking_id: Number.parseInt(this.$route.params.booking_id)
        }
        // this.$store.dispatch('getReport', data)
    },

}                                                                                                                                                                     
</script>

<style scoped></style>