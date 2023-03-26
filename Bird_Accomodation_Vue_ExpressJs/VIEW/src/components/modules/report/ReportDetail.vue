<template>
  <!-- reportData: {{ reportData }} -->
  <!-- {{ reportData.images[0]?.service_report_image}} -->
  <div id="wrapper" class="columns">
    <!--      report text -->
    <div class="column is-6" style="padding-left: 61px;">
      <ReportMessage :reportData="reportData" />
    </div>

    <!--      report img-->
    <div class="column is-6" id="report_img">
      <a-carousel dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <img class="img_report_paging" :src="getImgUrl(reportData.images[props.i]?.service_report_image)" />
        </template>
        <div v-for="item in reportData.images" :key="item">
          <img class="img_report" :src="getImgUrl(item.service_report_image)" />
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
const baseUrl = 'http://localhost:5000/file/get_report_img/'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import ReportMessage from './ReportMessage.vue';
export default {
  name: "Report Detail",
  data() {
    return {}
  },
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
    ReportMessage
  },
  props: {
    reportData: {
      type: Object,
      required: true
    },

  },
  computed: {},
  methods: {
    getImgUrl(img_name) {
      return `${baseUrl}${img_name}`;
    }
  },
  created() {

  }
}
</script>

<style scoped>
#wrapper {
  padding: 0;
  margin: 0;
  height: 597px;
  /* background-color: #61c88a; */
  border: 0.2px solid #aaaaaa;
  border-radius: 20px;
}

.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}

.ant-carousel :deep(.slick-slide img) {
  /* border: 5px solid #ffffff; */
  display: block;
  margin: auto;
  max-width: 80%;
}

.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}

.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}

.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}

.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

#report_img{
  margin-top: 40px;
}

.img_report {
  width: 424px;
  height: 424px;
  object-fit: cover;
}

.img_report_paging{
  margin-top: 20px;
  cursor: pointer;
}
</style>