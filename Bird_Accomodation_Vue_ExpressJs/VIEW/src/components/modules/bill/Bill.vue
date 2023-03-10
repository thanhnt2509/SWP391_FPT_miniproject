<template>
    <div>
        <div class="container">
            <div class="has-text-centered">
                <h1 class="title">Bill for booking_id_{{ $route.params.booking_id }}</h1>
            </div>
            {{ seed }}

            <div style="width: 600px;">
                <!-- user info -->
                <div>
                    <h2 class="subtitle title_info">Customer info</h2>
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
                    <h2 class="subtitle title_info">Bird info</h2>
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

                <!-- booking info -->
                <div>
                    <h2 class="subtitle title_info">Booking info</h2>
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
                    </table>
                </div>

                <!-- service info -->
                <div>
                    <h2 class="subtitle title_info">Service picked info</h2>
                    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Service name</th>
                                <th style="text-align: right;">Booked price</th>
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

                <!-- total amount -->
                <div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Bill',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            seed: 'getCurrentBill'
        })
    },
    created() {
        this.$store.dispatch('fetchCurrentBill', this.$route.params.booking_id)
    }
}
</script>


<style scoped>
.title_info {
    margin: 20px 0px 10px 0px
}

tr td:nth-child(2) {
    text-align: right;
}
</style>