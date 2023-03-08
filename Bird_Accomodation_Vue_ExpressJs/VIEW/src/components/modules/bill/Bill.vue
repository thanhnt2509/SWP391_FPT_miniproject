<template>
    <div>
        <div class="container">
            <div class="has-text-centered">
                <h1 class="title">Bill for booking_id_{{ $route.params.booking_id }}</h1>
            </div>
            <div style="width: 600px;">
                <!-- user info -->
                <div>
                    <h2 class="subtitle title_info">Customer info</h2>
                    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                        <tr>
                            <td>Customer name</td>
                            <td>{{ seed.user.user_name }}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{ seed.user.address }}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{{ seed.user.phone }}</td>
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
                            <td>{{ seed.booking.start_date }}</td>
                        </tr>
                        <tr>
                            <td>End date</td>
                            <td>{{ seed.booking.end_date }}</td>
                        </tr>
                        <tr>
                            <td>Payment status</td>
                            <td>{{ seed.booking.payment_status }}</td>
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
                                <th>Booked price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="service in seed.services">
                                <td>{{ service.service_name }}$/pack</td>
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
export default {
    name: 'Bill',
    data() {
        return {
            seed: {
                bill_id: 1,
                user: {
                    user_name: 'John Doe',
                    address: '1234 Main St',
                    phone: '123-456-7890',
                },
                bird: {
                    bird_id: '1234',
                    bird_name: 'Tweety',
                },
                booking: {
                    // booking_id: '1234',
                    start_date: '2019-01-01',
                    end_date: '2019-01-01',
                    payment_status: 'paid',
                },
                services: [
                    {
                        service_id: 1,
                        service_name: 'Food and supplies',
                        booked_price: 200,
                    },
                    {
                        service_id: 2,
                        service_name: 'Training',
                        booked_price: 200,
                    },
                    {
                        service_id: 3,
                        service_name: 'Photography',
                        booked_price: 200,
                    },
                ],
                total_amount: 600,
            }
        }
    }
}
</script>


<style scoped>
.title_info {
    margin: 20px 0px 10px 0px
}
</style>