<template>
    <div class="container content">
        <h1 class="title has-text-centered">Report History for Booking_{{ $route.params.booking_id }}</h1>
        <ReportDay />
        <ReportDetail />
    </div>

</template>
<script>
import ReportDay from './ReportDay.vue'
import ReportDetail from './ReportDetail.vue'
import { mapGetters } from 'vuex'
export default {
    name: "Report",
    props: {
        
    },
    components: {
        ReportDay,
        ReportDetail
    },

}
</script>

<style scoped>

</style>