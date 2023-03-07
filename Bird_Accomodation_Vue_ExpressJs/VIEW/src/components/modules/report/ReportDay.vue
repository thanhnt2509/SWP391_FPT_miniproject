<template>
    <div class="container has-text-centered">
        <a-tabs v-model:activeKey="activeKey" type="card">
            <a-tab-pane key="1" tab="Tab 1">
                <ReportDetail />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2">
                <ReportDetail />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">
                <ReportDetail />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import ReportDetail from './ReportDetail.vue'
import { mapGetters } from 'vuex'
export default {
    name: "Report Day",
    props: {

    },
    data() {
        return {
            activeKey: 1
        };
    },
    computed: {
        ...mapGetters['getReportItem']
    },
    components: {
        ReportDetail,
    },

}
</script>

<style scoped></style>