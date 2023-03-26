<template>
  <!-- SORT BY: {{ sort_by }} <br /> -->
  <!-- dateFrom: {{ dateFrom }} dateTo: {{ dateTo }} -->
  <!-- visible: {{ visible }} -->
  <a-modal width="1000px" v-model:visible="visible" :title="`Detail for booking ${booking_idSelected}`">
    <template #footer></template>
    <Manage_TrannsactionDetail />
  </a-modal>
  <!-- getAllBookings: {{ getAllBookings }} -->
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'user_name'">
        <span>
          <smile-outlined />
          Customer name
        </span>
      </template>
      <template v-if="column.key === 'booking_id'">
        <span> ID </span>
      </template>
      <template v-if="column.key === 'bird_name'">
        <span>
          <smile-outlined />
          Bird name
        </span>
      </template>
      <template v-if="column.key === 'status'">
        <span> Status </span>
      </template>
    </template>

    <!-- action -->
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'bird_name'">
        <span>
          {{ record.bird_name }}
        </span>
      </template>
      <template v-if="column.key === 'booking_id'">
        <span>
          <a href="#" @click="(e) => showDetail(e, record.booking_id)">{{
            record.booking_id
          }}</a>
        </span>
      </template>

      <template v-if="column.key === 'status'">
        <span>
          <a-tag style="padding: 5px 20px; border-radius: 20px" :color="bookingState[record.status].color">
            {{ bookingState[record.status].state }}
          </a-tag>
          <!-- <p>{{ bookingState[record.status].state }}</p> -->
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <!-- approve and reject booking -->
        <span v-if="bookingState[record.status].state === 'Pending'">
          <a-popconfirm title="Are you sure to approve this booking ?" ok-text="Yes" cancel-text="No"
            @confirm="approveBooking(record.booking_id)" @cancel="">
            <button class="button is-success">
              <i style="padding-right: 10px" class="fa-solid fa-circle-check"></i>Approve
            </button>
          </a-popconfirm>

          <a-divider type="vertical" />

          <a-popconfirm title="Are you sure to reject this booking ?" ok-text="Yes" cancel-text="No"
            @confirm="rejectBooking(record.booking_id)" @cancel="">
            <!-- <template #icon><question-circle-outlined style="color: red" /></template> -->
            <button class="button is-danger">
              <i style="padding-right: 10px" class="fa-solid fa-circle-xmark"></i>Reject
            </button>
          </a-popconfirm>
        </span>
        <!-- check-in  -->
        <span v-else-if="bookingState[record.status].state === 'Approved'">
          <a-popconfirm title="Are you sure to perform check-in on this booking ?" ok-text="Yes" cancel-text="No"
            @confirm="checkin_Booking(record.booking_id)" @cancel="">
            <!-- <template #icon><question-circle-outlined style="color: red" /></template> -->
            <button class="button is-info">
              <i style="padding-right: 10px" class="fa-solid fa-calendar-check"></i>Check-in
            </button>
          </a-popconfirm>
        </span>

        <!-- view bill  -->
        <span v-else-if="bookingState[record.status].state === 'Completed'">
          <router-link :to="`/bill/${record.booking_id}`">
            <button class="button is-link is-light">
              <i style="padding-right: 10px" class="fa-solid fa-wallet"></i>View Bill
            </button>
          </router-link>
        </span>

        <!-- re-booking  -->
        <span v-else-if="bookingState[record.status].state === 'Canceled'">
          <button class="button is-warning">
            <i style="padding-right: 10px" class="fa-brands fa-rev"></i>Re-booking
          </button>
        </span>

        <!-- update and check-out  -->
        <span v-else-if="bookingState[record.status].state === 'On-going'">
          <router-link :to="`/manager/report/${record.booking_id}`"><button class="button is-link">
              <i style="padding-right: 10px" class="fa-solid fa-square-pen"></i>Update
            </button></router-link>
          <a-divider type="vertical" />

          <a-popconfirm title="Are you sure to reject this booking ?" ok-text="Yes" cancel-text="No"
            @confirm="$router.push(`/manager/checkout/${record.booking_id}`)" @cancel="">
            <button class="button is-primary">
              <i style="padding-right: 10px" class="fa-regular fa-credit-card"></i>Check-out
            </button>
          </a-popconfirm>
        </span>
      </template>
    </template>
  </a-table>
  <!-- <p>all booking</p>
  {{ getAllBookings }}
  <p>state</p>
  {{ bookingState }} -->
</template>
<script>
import Manage_TrannsactionDetail from "./Manage_TrannsactionDetail.vue";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, computed, ref, toRef } from "vue";
import { useStore } from "vuex";
const columns = [
  {
    name: "Booking ID",
    dataIndex: "booking_id",
    key: "booking_id",
  },
  {
    name: "Customer name",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date from",
    key: "date_from",
    dataIndex: "date_from",
  },
  {},
  {
    title: "Date to",
    key: "date_to",
    dataIndex: "date_to",
  },
  {
    name: "Bird",
    dataIndex: "bird_name",
    key: "bird_name",
  },
  {
    name: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
  },
];
export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    Manage_TrannsactionDetail,
  },
  props: {
    sort_by: String,
    // dateFrom: String,
    // dateTo: String,
  },
  setup(props) {
    const store = useStore();

    const getAllBookings = computed(() => {
      //handle search by date
      // if (
      //   props.dateFrom !== "" &&
      //   props.dateTo !== "" &&
      //   !props.dateFrom &&
      //   !props.dateTo
      // ) {
      //   const payload = {
      //     dateFrom: props.dateFrom,
      //     dateTo: props.dateTo,
      //   };
      //   return store.getters[("allBookingItems_date", payload)];
      // } else
      if (props.sort_by === "All") {
        return store.getters["allBookingItems"];
      } else if (props.sort_by === "Lastest") {
        return store.getters["allBookingItems_latest"];
      }else if (props.sort_by === "Pending") {
        return store.getters["allBookingItems_pending"];
      } else if (props.sort_by === "Approved") {
        return store.getters["allBookingItems_approved"];
      } else if (props.sort_by === "On-going") {
        return store.getters["allBookingItems_ongoing"];
      } else if (props.sort_by === "Completed") {
        return store.getters["allBookingItems_completed"];
      } else if (props.sort_by === "Canceled") {
        return store.getters["allBookingItems_canceled"];
      }
    });

    // add an property visible for each item
    const data = getAllBookings;
    // .value.map((item) => {
    //     return {
    //         ...item,
    //         visible: false,
    //     };
    // });

    const visible = ref(false);
    const booking_idSelected = ref();

    const bookingState = store.getters.bookingStateItems;

    const approveBooking = (booking_id) => store.dispatch("approveBooking", booking_id);
    const rejectBooking = (booking_id) => store.dispatch("rejectBooking", booking_id);
    const checkin_Booking = (booking_id) => store.dispatch("checkin_Booking", booking_id);
    const showDetail = (e, booking_id) => {
      e.preventDefault();
      visible.value = true;
      booking_idSelected.value = booking_id;
      store.dispatch("fetchCurrentBill", booking_idSelected.value);
    };

    return {
      data,
      columns,
      bookingState,
      getAllBookings,
      approveBooking,
      rejectBooking,
      checkin_Booking,
      showDetail,
      visible,
      booking_idSelected,
      //checkout_Booking,
    };
  },
  computed: {},
});
</script>
