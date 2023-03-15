<template>
    <div class="content" style="padding-left: 6%; padding-right: 6%;">
        <div class="has-text-centered">
            <h1 class="title">Report History</h1>
            <!-- <p class="subtitle">{{ getReportItem?.date_from }} - {{ getReportItem?.date_to }}</p> -->

        </div>
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

<style>
</style>