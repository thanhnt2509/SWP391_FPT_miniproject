<template>
    <div>
        <h2>Serivce booked</h2>
        <ul>
            <!-- List of service that booked with price at the moment -->
            <!-- can select more service and submit: will be next iteration -->
            <li v-for="service in serviceItems">
                <input class="checkbox" type="checkbox" name="service" :checked="services.find(item => item.service_id === service.service_id)" disabled>
                <label>{{ service.name }}</label>
            </li>


        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Booking_Service_Info',
    computed: {
        ...mapGetters(['serviceItems'])
    },
    props: {
        services: Array,
    }
}
</script>