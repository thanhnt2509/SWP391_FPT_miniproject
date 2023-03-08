<template>
    <div class="container has-text-centered">
        test get from state : {{ getNewReport }}
        <a-tabs v-model:activeKey="activeKey" type="card">
            <a-tab-pane v-for="(date, index) in getReportDetail" :key="index" :tab="date.date">
                <!-- {{ date.services }} -->
                <ReportDetail :serviceReport="date.services" />
            </a-tab-pane>
            <a-tab-pane :key="getReportDetail?.length">
                <template #tab>
                    <span>
                        <i style="padding-right: 10px;" class="fa-solid fa-plus"></i>
                        {{ new Date().toISOString().slice(0, 10) }}
                    </span>
                </template>
                <!-- test length {{ getReportDetail?.length }} <br>
                test {{ getReportDetail[0].services }} -->
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
            getReportItem: 'getReportItem',
            getReportDetail: 'getReportDetail',
            getNewReport: 'getNewReport',
        })
    },
    components: {
        ReportDetail,
    },

}
</script>

<style scoped></style>