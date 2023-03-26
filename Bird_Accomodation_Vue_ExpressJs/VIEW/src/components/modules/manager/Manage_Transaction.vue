<template>
  <div id="wrapper_header">
    <h1>Transaction list</h1>
    <div id="sortingBar">
      <h3>Sort by status</h3>
      <div id="sortingBar_button">
        <button @click="sort_by = 'Lastest'" class="button is-dark is-primary">10 Lastest Booking</button>
        <button @click="sort_by = 'All'" class="button is-dark is-light">All</button>
        <button @click="sort_by = 'Pending'" class="button is-warning"><i style="font-family: 'Font Awesome 5 Free'; padding-right: 10px"
            class="fa-solid fa-circle-pause"></i>Pending</button>
        <button @click="sort_by = 'Approved'" class="button is-success"><i style="font-family: 'Font Awesome 5 Free'; padding-right: 10px"
            class="fa-solid fa-calendar-check"></i>Approved</button>
        <button @click="sort_by = 'On-going'" class="button is-info"><i style="font-family: 'Font Awesome 5 Free'; padding-right: 10px"
            class="fa-solid fa-square-pen"></i>On-going</button>
        <button @click="sort_by = 'Completed'" class="button is-link"><i style="font-family: 'Font Awesome 5 Free'; padding-right: 10px"
            class="fa-solid fa-wallet"></i>Completed</button>
        <button @click="sort_by = 'Canceled'" class="button is-danger"><i style="font-family: 'Font Awesome 5 Free'; padding-right: 10px"
            class="fa-solid fa-circle-xmark"></i>Canceled</button>
      </div>
    </div>
  </div>


  <div>
    <TransactionList :sort_by="sort_by" />
  </div>
</template>

<script>
import TransactionList from "./Manage_TransactionList.vue";
import { UserOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    UserOutlined,
    DownOutlined,
    TransactionList,
  },
  setup() {
    const store = useStore();

    const bookingStateItems = store.getters.bookingStateItems;

    const sort_by = ref("All");

    return {
      sort_by,
      bookingStateItems
    };
  },
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

#wrapper_header h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

#sortingBar *{
  font-family: unset;
}

#sortingBar {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
}

#sortingBar h3 {
    font-size: 2rem;
    font-weight: 600;
    width: 400px;
    margin-right: 270px;
}

#sortingBar_button button {
    margin: 0 10px;
    width: fit-content;
    padding: 3px 10px;
}
</style>