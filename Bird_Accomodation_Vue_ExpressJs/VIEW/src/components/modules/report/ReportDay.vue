<template>
    <div class="container has-text-centered">
       new report : {{ getNewReport }} <br>
       <!-- report detail : {{ getReportDetail }} <br> -->
       <div v-if="!getReportDetail?.length">
            <h3 class="title">No report available</h3>
       </div>
        <a-tabs v-model:activeKey="activeKey" type="card">
            <a-tab-pane v-for="(date, index) in getReportDetail" :key="index" :tab="date.date">
                <!-- {{ date.services }} -->
                <ReportDetail :serviceReport="date.services" />
            </a-tab-pane>
            <!-- v-if="getUser.role === 1" -->
            <a-tab-pane  :key="getReportDetail?.length">
                <template #tab>
                    <span>
                        <i style="padding-right: 10px;" class="fa-solid fa-plus"></i>
                        {{ new Date().toISOString().slice(0, 10) }}
                    </span>
                </template>
                <ReportDetail :isEditable="true" :serviceReport="getNewReport"/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import ReportDetail from './ReportDetail.vue'
import { mapGetters } from 'vuex'
export default {
    name: "Report Day",
    data() {
        return {
            activeKey: 1,
            empty_services: [
                {
                    service_name: 'Service name',
                    service_report_text: 'Service content',
                    service_report_image: '/images/big-treehouse.jpg'
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            getReportDetail: 'getReportDetail',
            getNewReport: 'getNewReport',
            getUser: 'getUser',
        })
    },
    components: {
        ReportDetail,
    },

}
</script>

<style scoped></style>