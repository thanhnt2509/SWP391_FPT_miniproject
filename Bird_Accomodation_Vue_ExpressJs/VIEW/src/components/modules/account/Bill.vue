<template>
    <div id="wrapper">
        <h1>Bill information _B{{ $route.params.booking_id }}</h1>
        <div class="columns">
            <!-- {{ seed }} -->
            <div class="column">
                <!-- user info -->
                <div>
                    <h2>Customer info</h2>
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
                    <h2>Bird info</h2>
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
                            <td style="border: unset;">Check-in Image</td>
                            <td style="border: unset;"><a-image
                                    :src="`http://localhost:5000/file/get_bird_img/${seed?.bird?.image}`" class="bird_image"
                                    alt="" width="300px" height="300px" /></td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- service info -->
            <div class="column">
                <h2>Service picked info</h2>
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

            <!-- booking info -->
            <div class="column">
                <h2>Check-in info</h2>
                <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                    <tr>
                        <td>Start date</td>
                        <td>{{ seed?.booking?.date_from }}</td>
                    </tr>
                    <tr>
                        <td>End date</td>
                        <td>{{ seed?.booking?.date_to }}</td>
                    </tr>
                </table>

                <h2>Check-out info</h2>
                <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                    <tr>
                        <td>Payment status</td>
                        <td>{{ seed?.bill?.payment_status === 1 ? "COMPLETE" : "Not check-out yet" }}</td>
                    </tr>
                    <tr>
                        <td>Payment method</td>
                        <td>{{ seed?.bill?.payment_method == 0 ? 'CASH' : seed?.bill?.payment_method == 1 ? 'CARD' :
                            'WALLET' }}</td>
                    </tr>
                    <tr>
                        <td>Check-out date</td>
                        <td>{{ seed?.bill?.checkout_date }}</td>
                    </tr>
                    <tr>
                        <td style="border: unset;">Check-out image</td>
                        <td style="border: unset;"><a-image
                                :src="`http://localhost:5000/file/get_checkout_img/${seed?.bill?.checkout_image}`"
                                class="bird_image" alt="" width="300px" height="300px" /></td>
                    </tr>
                </table>

                <div id="feedback">
                    <h2>Leave a feedback</h2>
                    <p>Rating: <a-rate v-model:value="ratingPoint" allow-half /></p>
                    <input class="input" type="text" v-model="feedbackContent"
                        placeholder="What is feed like when booking at Bird Oasis ?">
                    <div id="feedback_button">
                        <button class="button is-info" @click="submitFeedback">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Modal } from 'ant-design-vue'
export default {
    name: 'Bill',
    data() {
        return {
            feedbackContent: '',
            ratingPoint: 4,
        }
    },
    computed: {
        ...mapGetters({
            seed: 'getCurrentBill'
        })
    },
    methods: {
        async submitFeedback() {
            const payload = {
                user_id: this.$store.getters.getUser.user_id,
                booking_id: this.$route.params.booking_id,
                comment: this.feedbackContent,
                rating: this.ratingPoint
            }

            console.log(payload);
            const response = await fetch(`http://localhost:5000/review/${payload.booking_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.status === 200) {
                Modal.success({
                    title: 'Thank you for your feedback',
                    content: 'Your feedback has been sent to Bird Oasis',
                });

                this.$router.push('/account/transaction');
            } else {
                Modal.error({
                    title: 'Something went wrong',
                    content: 'Please try again later',
                });
            }
        }
    },
    created() {
        this.$store.dispatch("fetchCurrentBill", this.$route.params.booking_id);
    }
}
</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Popins', sans-serif;
}

#wrapper {
    width: 80%;
    margin: 0 auto;
}

#wrapper h1 {
    text-align: center;
    margin: 20px 0;
    font-weight: 700;
    font-size: 2.5rem;
}

tr td:nth-child(2) {
    text-align: right;
}

h2 {
    margin: 20px 0 0 0;
    font-weight: 600;
    font-size: 2rem;
}

#feedback p{
    font-size: 1.25rem;
}

#feedback input{
    padding: 10px;
}

#feedback_button{
    text-align: center;
}

#feedback_button button{
    padding: 5px 20px;
    margin-top: 10px;
}
</style>