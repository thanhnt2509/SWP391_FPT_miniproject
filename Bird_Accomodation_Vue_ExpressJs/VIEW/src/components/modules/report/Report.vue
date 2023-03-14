<template>
    <div class="container content">
        <div class="has-text-centered">
            <h1 class="title ">Report History for Booking_{{ $route.params.booking_id }}</h1>
            <p class="subtitle">{{ getReportItem?.date_from }} - {{ getReportItem?.date_to }}</p>
        </div>
        <!-- <p>TEST: {{ getReportItem }}</p>
        <p>getUser test: {{ getUser }}</p>
        <p>getReportDetail test: {{ getReportDetail }}</p> -->
        <!-- <ReportDay /> -->
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
        })
    },
    components: {
        // ReportDay,
    },
    created() {

    },

}                                                                                                                                                                     
</script>

<style scoped></style>