<template>
    <div class="main content">
        <h1>Bird check</h1>
        <!-- each bird in boarding-->
        <div v-for="booking in getBookings">
            <!-- overview -->
            <div>
                <!-- {{ booking }} -->
                <h2>Overview</h2>
                <div class="columns">
                    <Bird_Info :bird="booking.bird_id" style="width: fit-content;" class="bird_info column" />
                    <Booking_Info :booking="booking" style="width: fit-content;" class="bird_info column" />
                    <Booking_Service_Info :services="booking.services" style="width: fit-content;" class="bird_info column" />
                </div>
            </div>
            <!-- report -->
            <div class="bird_info column">
                <Booking_Report :booking="booking" />
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
<style scoped>
.main {
    border: 1px solid #ccc;
    border-radius: 14px;
    padding: 10px;
    margin: 10px;
}

.bird_info {
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 14px;
    padding: 20px;
    margin: 20px;
}
</style>