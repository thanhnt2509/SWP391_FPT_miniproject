<template>
 <!-- reportData: {{ reportData }} -->
  <div class="main columns">
    <!--      report text -->
    <div class="column is-6" style="padding-left: 61px;">
      <h1 class="title">Report Message</h1>
      <a-textarea disabled="" v-model:value="reportData.service_report_text" placeholder="Basic usage" :rows="7"/>


      <h1 class="title">Place a feedback</h1>
      <a-textarea v-model:value="reportData.feedback_content" placeholder="Basic usage" :rows="7"/>
    </div>

    <!--      report img-->
    <div class="column is-6">
      <h1 class="title">Report Image</h1>
      <a-carousel autoplay dots-class="slick-dots slick-thumb" :dot-position="'top'" style="padding-top: 40px; background-color: #d5e28a;">
        <div v-for="item in reportData.images" :key="item" class="image_report">
          <img :src="getImgUrl(item.service_report_image)" :alt="item.service_report_image"/>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<script>
const baseUrl = 'http://localhost:5000/file/get_report_img/'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
export default {
  name: "Report Detail",
  data() {
    return {}
  },
  components: {
    LeftCircleOutlined,
    RightCircleOutlined
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
.main {
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
  border: 5px solid #b39b31;
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
.image_report{
  width: 369px;
  height: 371px;
}

.image_report{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>