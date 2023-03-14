<template>
    <div class="container content">
        <div class="has-text-centered">
            <h1 class="title">Report History</h1>
            <!-- <p class="subtitle">{{ getReportItem?.date_from }} - {{ getReportItem?.date_to }}</p> -->

        </div>
         <ReportDay />
    </div>
</template>

<script>
import ReportDay from '../report/ReportDay.vue';
import { mapGetters } from 'vuex'
export default {
    name: "Manage_Report",
    data() {
        return {
        }
    },
    components: {
        ReportDay,
    },
    computed: {
        ...mapGetters({

        })
    },

}
</script>

<style></style>