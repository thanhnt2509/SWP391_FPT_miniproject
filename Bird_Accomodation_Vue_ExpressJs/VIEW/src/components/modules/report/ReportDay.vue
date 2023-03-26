<template>
  <div class="column is-8">
    <div class="container has-text-centered">
      <!--       report: {{ getReportItem }}-->
      <div v-if="!getReportItem">
        <h3 class="title">No report available</h3>
      </div>
      <a-tabs v-model:activeKey="activeKey" type="card">
        <a-tab-pane v-for="(data, index) in getReportItem" :key="index" :tab="data.date">
          <ReportDetail :reportData="data" />
        </a-tab-pane>
      </a-tabs>
      

      <!--        button to add a report-->
      <div v-if="$store.getters.getUser?.role === 1">
        <button class="button is-primary add_report_button" @click="showModal">Add Report</button>
        <a-modal width="1000px" v-model:visible="visible"
          :title="`Update Report`" :confirm-loading="confirmLoading"
          @ok="handleOk">
          <!--        <p>{{ modalText }}</p>-->
            <!-- getNewReportContent: {{ getNewReportContent }} <br>
            getNewReportImages: {{ getNewReportImages }}  <br>
            getNewReportUpdateList: {{ getNewReportUpdateList }} <br> -->
          <div class="columns">
            <ReportUpload />
            <ReportUploadServiceSelect />
          </div>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import ReportDetail from './ReportDetail.vue'
import ReportUploadServiceSelect from './ReportUploadServiceSelect.vue'
import ReportUpload from "@/components/modules/report/ReportUpload.vue";
import { mapGetters } from 'vuex'
import { Modal } from "ant-design-vue";
import { h } from "vue";

export default {
  name: "Report Day",
  data() {
    return {
      activeKey: 0,
      modalText: 'Add a report for this day ?',
      visible: false,
      confirmLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      getReportItem: 'getReportItem',
      getNewReport: 'getNewReport',
      getNewReportContent: 'getNewReportContent',
      getNewReportImages: 'getNewReportImages',
      getNewReportUpdateList: 'getNewReportUpdateList',
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

        // validate form  -> ok
        if (!this.validateReportForm()) {
          Modal.error({
            title: 'Upload report failed !',
            content: h('div', {}, [
              h('p', 'Please fill all the fields !'),
            ]),
          });
          return;
        }

        // handle form
        const formData = this.handleContentForm();
        const uploadReportListPayload = {
          booking_id: this.$route.params.booking_id,
          date: this.$store.getters.getNewReportDate,
          updateList: this.$store.getters.getNewReportUpdateList,}
        const success = 
          this.$store.dispatch('submitNewReport', formData) && 
          this.$store.dispatch('submitNewReportUpdateList', uploadReportListPayload);
        if (success) {
          Modal.success({
            title: 'Report upload successfully !',
            content: h('div', {}, [
              h('p', 'Report was submited to customer !'),
            ]),
          });
          this.$store.dispatch('clearNewReport');
          this.$store.dispatch('getAllReportOfBooking_id', this.$route.params.booking_id);
          this.$store.dispatch('getAllServiceOfBooking_id', this.$route.params.booking_id);
          this.$router.push(`/manager/report/${this.$route.params.booking_id}`);
        } else {
          Modal.error({
            title: 'Something went wrong !',
            content: h('div', {}, [
              h('p', 'Please try again later !'),
            ]),
          });
        }
      }, 2000);
    },
    handleContentForm() {
      const formData = new FormData();
      formData.append('booking_id', this.$route.params.booking_id);
      formData.append('date', this.$store.getters.getNewReportDate);
      formData.append('service_report_text', this.$store.getters.getNewReportContent);
      // formData.append('service_report_update', this.$store.getters.getNewReportUpdateList); // can not upload array as form data
      const images = this.$store.getters.getNewReportImages;
      for (let i = 0; i < images.length; i++) {
        formData.append('files', images[i]);
      }

      return formData;
    },
    validateReportForm() {
      const newReport = this.$store.getters.getNewReport;
      console.log(newReport);
      if (!newReport || !newReport.images || !newReport.date || !newReport.content || newReport.content.length === 0) {
        return false;
      }
      return true;
    }
  },
  components: {
    ReportDetail,
    ReportUpload,
    ReportUploadServiceSelect,
  },
  mounted() {
    this.$store.dispatch('getAllReportOfBooking_id', this.$route.params.booking_id);
    this.getReportItem = this.$store.getters.getReportItem;
  },
  created(){
    this.$store.dispatch('getAllReportOfBooking_id', this.$route.params.booking_id);
    this.getReportItem = this.$store.getters.getReportItem;
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