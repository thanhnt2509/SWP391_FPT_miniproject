<template>
    <a-layout>
        <Header />
        <a-layout>
            <Menu 
                @ListBird="nav = 1" 
                @Registration="nav = 2" 
                @Tracking="nav = 3" 
                @Booknow="nav = 5" 
                @BookTracking="nav = 4"/>
                
                <BirdList v-if="nav == 1" />
                <BirdRegistration v-else-if="nav == 2" />
                <BirdTracking v-else-if="nav == 3"/>
                <BookingTracking v-else-if="nav == 4" />
                <Booking v-else-if="nav == 5" />
        </a-layout>
        <Footer />
    </a-layout>

</template>


<script setup>
import { ref } from 'vue'
import Header from '../components/Base/Header.vue'
import BirdList from '../components/Content_Bird.vue'
import BirdRegistration from '../components/Content_BirdRegistration.vue'
import BirdTracking from '../components/Content_BirdTracking.vue'
import Booking from '../components/Content_Booking.vue'
import BookingTracking from '../components/Content_Tracking.vue'
import Menu from '../components/Menu_Account.vue'
import Footer from '../components/Base/Footer.vue'


const tabs = {
    BirdList,
    BirdRegistration,
    BirdTracking,
    Booking,
    BookingTracking
}

const current_tab = ref('BirdList')
const nav = ref(['1'])
</script>