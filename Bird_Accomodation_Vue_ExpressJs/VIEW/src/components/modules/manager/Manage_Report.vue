<template>
    <div id="wrapper_title">
        <h1 class="title">Report History for Booking_{{ $route.params.booking_id }}</h1>
        <div class="columns">
            <ReportDay />
            <div class="column is-4">
                <ReportProgressBar />
            </div>
        </div>
    </div>
</template>

<script>
import ReportDay from '../report/ReportDay.vue';
import ReportProgressBar from '../report/ReportProgressBar.vue';
import { mapGetters } from 'vuex'
export default {
    name: "Manage_Report",
    data() {
        return {
        }
    },
    components: {
        ReportDay,
        ReportProgressBar
    },
    computed: {
        ...mapGetters({

        })
    },

}
</script>

<style scoped>
#wrapper_title{
    width: 80%;
    margin: 0 auto;
}

#wrapper_title h1{
    font-weight: 650;
    font-size: 3rem;
    text-align: center;
}
</style>