<template>
    <div class="content" style="padding-left: 6%; padding-right: 6%;">
        <div class="has-text-centered">
            <h1 class="title ">Report History </h1>
            <!-- for Booking_{{ $route.params.booking_id }} -->
            <!-- <p class="subtitle">date_from - date_to</p> -->
        </div>
         <!-- <p>TEST: {{ getReportItem }}</p> -->
         <!-- <p>get all service of booking: {{ getBookingServices }}</p> -->
        <!--<p>getUser test: {{ getUser }}</p> -->
        <div class="columns">
            <ReportDay />
            <div class="column is-4">
                <ReportProgressBar />
                <TransactionNewService />
            </div>
        </div>
    </div>
</template>
<script>
import ReportDay from './ReportDay.vue'
import TransactionNewService from '../account/TransactionNewService.vue';
import ReportProgressBar from './ReportProgressBar.vue';
import { mapGetters } from 'vuex'
export default {
    name: "Report",
    props: {

    },
    computed: {
        ...mapGetters({
            getReportItem: 'getReportItem',
            getBookingServices: 'getBookingServices',
        })
    },
    components: {
        ReportDay,
        TransactionNewService,
        ReportProgressBar
    },
    created() {

    },

}                                                                                                                                                                     
</script>

<style scoped></style>