<template>
    <div class="container content">
        <div class="has-text-centered">
            <h1 class="title ">Report History for Booking_{{ $route.params.booking_id }}</h1>
            <p class="subtitle">{{ getReportItem.date_from }} - {{ getReportItem.date_to }}</p>
        </div>
        <!-- <p>TEST: {{ getReportItem }}</p>
        <p>getUser test: {{ getUser }}</p>
        <p>getReportDetail test: {{ getReportDetail }}</p> -->
        <ReportDay />
    </div>
</template>
<script>
import ReportDay from './ReportDay.vue'
import { mapGetters } from 'vuex'
export default {
    name: "Report",
    props: {

    },
    computed: {
        ...mapGetters({
            getReportItem: 'getReportItem',
            getReportDetail: 'getReportDetail',
            getUser: 'getUser',
        })
    },
    components: {
        ReportDay,
    },
    created() {
        try {
            const data = {
                user_id: this.getUser.user_id,
                booking_id: Number.parseInt(this.$route.params.booking_id)
            }
            this.$store.dispatch('getReport', data)
        } catch (error) {
            console.log(error)
        }
    },

}                                                                                                                                                                     
</script>

<style scoped></style>