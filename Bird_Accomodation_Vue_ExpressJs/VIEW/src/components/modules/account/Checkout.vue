<template>
getCurrentBill: {{seed}}
  <div class="" style="padding-left: 17%; padding-right: 10%">
    <div class="has-text-centered">
      <h1 class="title">Checkout for booking {{ fields.booking_id }}</h1>
      <h2 class="subtitle">Date: {{ fields.today }}</h2>
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
              <td>{{ seed?.user?.name }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ seed?.user?.email }}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{{ seed?.user?.address }}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{{ seed?.user?.phone }}</td>
            </tr>
          </table>
        </div>

        <!-- bird info -->
        <div>
          <h2 class="subtitle title_info label">Bird info</h2>
          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <tr>
              <td>Bird name</td>
              <td>{{ seed?.bird?.bird_name }}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{{ seed?.bird?.gender === 1 ? 'Male' : 'Female' }}</td>
            </tr>
            <tr>
              <td>Image</td>
              <td><img :src="`http://localhost:5000/file/get_bird_img/${seed?.bird?.image}`" class="bird_image" alt=""></td>
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
                <th style="text-align: right">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="service in seed?.service">
                <td>{{ service.name }}</td>
                <td>{{ service.booked_price }}$/pack</td>
                <td style="text-align: right">{{ service.isPack === 0 ? service.quantity : 'Pack' }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total amount</th>
                <th></th>
                <td style="text-align: right">{{ seed?.total_service_amount }}$</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- booking info -->
      <div class="checkout_box column">
        <!-- show the fields to input an image upload for this checkout -->
        <div>


        </div>
        <h2 class="subtitle title_info label">Check-out info</h2>
        <table class="table is-striped is-narrow is-hoverable is-fullwidth">
          <tr>
            <td>Start date</td>
            <td>{{ seed?.booking?.date_from }}</td>
          </tr>
          <tr>
            <td>End date</td>
            <td>{{ seed?.booking?.date_to }}</td>
          </tr>
          <tr>
            <td>Payment status</td>
            <td>{{ seed?.booking?.status === 1 ? "complete" : "Not check-out yet" }}</td>
          </tr>
          <tr>
            <td>Check-out date</td>
            <td>(today){{ new Date(seed?.bill?.checkout_date).getMilliseconds() == new Date(0).getMilliseconds() ? 'Not check-out yet' : fields.today}}</td>
          </tr>
          <!-- <tr>
            <td>Total amount</td>
            <td>{{ seed?.bill?.total_amount }}</td>
          </tr> -->
          <tr>
            <td>Select Payment method</td>
            <td>
              <select v-model="fields.payment_method" class="select"
                style="border: 0.3px solid #e0e0e0; border-radius: 7px;">
                <option disabled>Please select payment method</option>
                <option value="0">Cash</option>
                <option value="1">Card</option>
                <option value="2">Wallet</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Upload image for checkout</td>
            <td><input type="file" accept="image/*" @change="evt => fields.imgCheckout = evt.target.files[0]"></td>
          </tr>
          {{ fields.imgCheckout }}
          <tr>
            <td></td>
            <!-- click run api request checkout open box to check ssuccessful -->
            <td><button class="button is-primary" @click="showModal">Confirm Checkout</button></td>
            <a-modal v-model:visible="visible" title="Checkout confirm" :confirm-loading="confirmLoading" @ok="handleOk">
              <p>{{ modalText }}</p>
            </a-modal>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Modal } from "ant-design-vue";
import { h } from "vue";
export default {
  name: "Bill",
  data() {
    return {
      modalText: 'Perform checkout on this booking ?',
      visible: false,
      confirmLoading: false,

      fields: {
        payment_method: 0,
        today: new Date().toISOString().slice(0, 10),
        booking_id: this.$route.params.booking_id,
        imgCheckout: null,
        total_service_amount: 0,
      }

    };
  },
  computed: {
    ...mapGetters({
      seed: "getCurrentBill",
    }),
  },
  methods: {
    showModal() {
      if (this.validateInputFields()) {
        this.visible = true;
      }
    },
    handleOk() {
      this.modalText = 'Performing checkout...';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.modalText = 'Perform checkout on this booking ?';  // reset modal text

        // run api request checkout
        const formData = this.handleContentForm();
        const successs = this.$store.dispatch("checkout", formData);

        if (successs) {
          // show success after 2s
          Modal.success({
            title: 'Checkout successfully !',
            content: h('div', {}, [
              h('p', 'Money will be transfered to your account soon !'),
              h('p', 'Thank you for using our service !'),
            ]),
          });
          // redirect to manager page
          this.$router.push('/manager');
        }
      }, 2000);
    },
    handleContentForm() {
      const formData = new FormData();
      formData.append("booking_id", this.fields.booking_id);
      formData.append("payment_method", this.fields.payment_method);
      formData.append("checkout_date", this.fields.today);
      formData.append("total_service_amount", this.seed?.total_service_amount);
      formData.append("file", this.fields.imgCheckout);
      return formData;
    },
    validateInputFields() {
      if (this.fields.imgCheckout === null) {
        Modal.error({
          title: 'Error',
          content: 'Please upload image for checkout !',
        });
        return false;
      }
      return true;
    }
  },
  created() {
    // this.$store.dispatch("publishBill", this.$route.params.booking_id);
    this.$store.dispatch("fetchCurrentBill", this.$route.params.booking_id);
    // this.fields.total_service_amount = this.seed?.total_service_amount;
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
.bird_image{
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
}
</style>
