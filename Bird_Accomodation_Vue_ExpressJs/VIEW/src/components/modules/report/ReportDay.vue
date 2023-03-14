<template>
  <div class="container has-text-centered">
    <!--       report: {{ getReportItem }}-->
    <div v-if="!getReportItem">
      <h3 class="title">No report available</h3>
    </div>
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane v-for="(data, index) in getReportItem" :key="index" :tab="data.date">
        <!--                 {{ data }}-->
        <ReportDetail :reportData="data"/>
      </a-tab-pane>
    </a-tabs>

    <!--        button to add a report-->
    <div>
      <button class="button is-primary add_report_button" @click="showModal">Add Report</button>
      <a-modal
          v-model:visible="visible"
          :title="`Update Report ${ new Date().toISOString().slice(0, 10) }`"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
      >
<!--        <p>{{ modalText }}</p>-->
        <ReportUpload />
      </a-modal>
    </div>
  </div>
</template>

<script>
import ReportDetail from './ReportDetail.vue'
import {mapGetters} from 'vuex'
import ReportUpload from "@/components/modules/report/ReportUpload.vue";

export default {
  name: "Report Day",
  data() {
    return {
      activeKey: 1,
      modalText: 'Add a report for this day ?',
      visible: false,
      confirmLoading: false,

    };
  },
  computed: {
    ...mapGetters({
      getReportItem: 'getReportItem',
    })
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.modalText = 'Adding report...';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.modalText = 'Add a report for this day ?';  // reset modal text

        // run api request checkout
        // const formData = this.handleContentForm();
        // const successs = this.$store.dispatch("addReport", formData);
      }, 2000);
    },
  },
  components: {
    ReportDetail,
    ReportUpload
  },
  created() {
    this.$store.dispatch('getAllReportOfBooking_id', this.$route.params.booking_id);
  }
}
</script>

<style scoped>
.add_report_button {
  margin-top: 20px;
  padding: 30px;
  font-size: 20px;
}

</style>