<template>
    <div id="wrapper">
        <h1>Report History </h1>
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

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Popins', sans-serif;
}

#wrapper{
    width: 80%;
    margin: 0 auto;
}

#wrapper h1{
    font-weight: 650;
    font-size: 3rem;
    text-align: center;
}
</style>