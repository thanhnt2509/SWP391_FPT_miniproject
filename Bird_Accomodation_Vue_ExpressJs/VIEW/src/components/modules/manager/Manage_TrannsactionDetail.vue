<template>
    <div class="columns">
        <!-- Detail for booking_id: {{ booking_id }} -->
        <!-- getCurrentBill: {{ seed }} -->
        <div class="column">
            <section>
                <h3>User</h3>
                <table class="table is-hoverable is-fullwidth">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{{ seed.user?.name }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{ seed.user?.email }}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{{ seed.user?.phone }}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{ seed.user?.address }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h3>Bird</h3>
                <table class="table is-hoverable is-fullwidth">
                    <tbody>
                        <tr>
                            <td>Bird name</td>
                            <td>{{ seed.bird?.bird_name }}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{{ seed.bird?.bird_type }}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{{ seed.bird?.gender === 0 ? "Femail" : "Male" }}</td>
                        </tr>
                        <tr>
                            <td>Image</td>
                            <td><a-image width="150px" height="150px" :src="`/api/file/get_bird_img/${seed.bird?.image}`"
                                    class="bird_img" alt="" /></td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{{ seed.bird?.description }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>

        <div class="column">
            <section>
                <h3>Service</h3>
                <table class="table is-hoverable is-fullwidth">
                    <thead>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        <tr v-for="service in seed.service">
                            <td>{{ service.name }}</td>
                            <td>{{ service.isPack === 0 ? service.quantity : "Pack" }}</td>
                            <td>{{ service.booked_price }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h3>Booking</h3>
                <table class="table is-hoverable is-fullwidth">
                    <tbody>
                        <!-- <tr>
                        <td>Booking_id</td>
                        <td>{{ seed.booking?.booking_id }}</td>
                    </tr> -->
                        <tr>
                            <td>Date From</td>
                            <td>{{ seed.booking?.date_from }}</td>
                        </tr>
                        <tr>
                            <td>Date To</td>
                            <td>{{ seed.booking?.date_to }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "Manage_TrannsactionDetail",
    data() {
        return {

        }
    },
    props: {
        booking_id: String,
    },
    methods: {

    },
    computed: {
        ...mapGetters({
            seed: 'getCurrentBill',
        }),
    },
    created() {
        this.$store.dispatch('fetchCurrentBill', this.booking_id)
    },
    updated() {
        this.$store.dispatch('fetchCurrentBill', this.booking_id)
    }
}
</script>

<style scoped>
h3{
    font-weight: 700;
    font-size: 1.2rem;
}

tr td:nth-child(2), td:nth-child(3) {
    text-align: right;
}
</style>