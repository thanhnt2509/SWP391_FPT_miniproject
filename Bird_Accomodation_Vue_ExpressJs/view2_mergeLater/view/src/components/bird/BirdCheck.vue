<template>
    <div>
        <h1>Bird check</h1>
        <!-- each bird in boarding-->
        <div v-for="booking in getBookings">
            <!-- overview -->
            <div>
                <h2>Overview</h2> {{ booking }}
                <Bird_Info :bird="booking.bird_id"/>
                <Booking_Info :booking="booking"/>
                <Booking_Service_Info :services="booking.services"/>
            </div>
            <!-- report -->
            <div>
                <Booking_Report :booking="booking"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Bird_Info from './Bird_Info.vue'
import Booking_Info from '../booking/Booking_Info.vue'
import Booking_Service_Info from '../booking/Booking_Service_Info.vue';
import Booking_Report from '../report/Booking_Report.vue';
export default {
    name: 'BirdCheck',
    computed: {
        ...mapGetters(['getBirds', 'getBookings'])
    },
    components: {
        Bird_Info,
        Booking_Info,
        Booking_Service_Info,
        Booking_Report
    }
}
</script>