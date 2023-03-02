<template>
  <div class="container content">
    <h1>Bird check</h1>
    <!-- each bird in boarding-->
    <div v-for="booking in getBookings.filter(each => each.booking_id == $route.params.id)">
      <!-- overview -->
      <div class="container">
        <!-- {{ booking }} -->
        <!-- <h2>Overview</h2> -->
        <div class="columns">
          <Bird_Info :bird="booking?.bird_id" style="width: fit-content; height: fit-content" class="bird_info column"
            noAction="true" resize_width="50%" />
          <div class="column">
            <Booking_Info :booking="booking" style="width: fit-content" class="bird_info" />
            <!-- report -->
            <div class="bird_info">
              <Booking_Report :booking="booking" />
            </div>
          </div>
          <Booking_Service_Info :services="booking?.services" style="width: fit-content" class="bird_info column" />
        </div>
        <a-tabs v-model:activeKey="activeKey">
          <!-- each date -->
          <a-tab-pane key="1" tab="2022-12-02">
            <div class="report_content" style="width: 100%;">
              <Booking_Report_Detail :booking="booking" />
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="2022-12-03" force-render>Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane key="3" tab="2022-12-04">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapGetters } from "vuex";
import Bird_Info from "./Bird_Info.vue";
import Booking_Info from "../booking/Booking_Info.vue";
import Booking_Service_Info from "../booking/Booking_Service_Info.vue";
import Booking_Report_Detail from "../booking/Booking_Report_Detail.vue";
import Booking_Report from "../booking/Booking_Report.vue";
export default {
  name: "BirdCheck",
  data() {
    return {
      activeKey: ref('1'),
    };
  },
  props: ['booking_id'],
  computed: {
    ...mapGetters(["getBirds", "getBookings"]),
  },
  components: {
    Bird_Info,
    Booking_Info,
    Booking_Service_Info,
    Booking_Report,
    Booking_Report_Detail,
  },
};
</script>
<style scoped>
.main {
  border: 1px solid #ccc;
  border-radius: 14px;
}

.bird_info {
  /* background-color: #eee; */
  /* border: 1px solid #ccc; */
  border-radius: 14px;
  padding: 20px;
  margin: 20px;
}
</style>
