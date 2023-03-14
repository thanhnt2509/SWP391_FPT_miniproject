<template>
  <div class="" style="padding-left: 17%; padding-right: 10%">
    <div class="has-text-centered">
      <h1 class="title">Checkout for booking {{ $route.params.booking_id }}</h1>
    </div>
    <div class="container columns" style="">
      <!-- {{ seed }} -->

      <div class="column is-half">
        <!-- user info -->
        <div>
          <h2 class="subtitle title_info label">Customer info</h2>
          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <tr>
              <td>Customer name</td>
              <td>{{ seed.user?.user_name }}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{{ seed.user?.address }}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{{ seed.user?.phone }}</td>
            </tr>
          </table>
        </div>

        <!-- bird info -->
        <div>
          <h2 class="subtitle title_info label">Bird info</h2>
          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <tr>
              <td>Bird ID</td>
              <td>{{ seed.bird.bird_id }}</td>
            </tr>
            <tr>
              <td>Bird name</td>
              <td>{{ seed.bird.bird_name }}</td>
            </tr>
          </table>
        </div>

        <!-- service info -->
        <div>
          <h2 class="subtitle title_info label">Service picked info</h2>
          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Service name</th>
                <th style="text-align: right">Booked price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in seed.services">
                <td>{{ service.service_name }}</td>
                <td>{{ service.booked_price }}$/pack</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total amount</th>
                <td>{{ seed.total_amount }}$</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- booking info -->
      <div class="checkout_box column">
        <a-result
          class="padding: 0"
          status="success"
          title="Checkout successfully !"
          :sub-title="`Booking: ${$route.params.booking_id} successfully !!`"
        >
        </a-result>
        <h2 class="subtitle title_info label">Booking info</h2>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
          <tr>
            <td>Start date</td>
            <td>{{ seed.booking.date_from }}</td>
          </tr>
          <tr>
            <td>End date</td>
            <td>{{ seed.booking.date_to }}</td>
          </tr>
          <tr>
            <td>Payment status</td>
            <td>{{ seed.booking.status === 1 ? "complete" : "Not check-out yet" }}</td>
          </tr>
          <tr>
            <td>Select Payment method</td>
            <td>
              <select v-model="payment_method" class="input">
                <option disabled>Please select payment method</option>
                <option value="0">Cash</option>
                <option value="1">Visa</option>
                <option value="2">Wallet</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <!-- click run api request checkout open box to check ssuccessful -->
            <td><button class="button is-primary">Confirm Checkout</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Bill",
  data() {
    return {
      payment_method: 0,
    };
  },
  computed: {
    ...mapGetters({
      seed: "getCurrentBill",
    }),
  },
  created() {
    this.$store.dispatch("fetchCurrentBill", this.$route.params.booking_id);
  },
};
</script>

<style scoped>
.title_info {
  margin: 20px 0px 10px 0px;
}

tr td:nth-child(2) {
  text-align: right;
}
.main {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
