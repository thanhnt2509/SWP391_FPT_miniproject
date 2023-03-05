<template>
    <div class="container content main">
        <div class="has-text-centered">
            <h1 class="title">Booking</h1>
            <p>Here you can book your bird's stay at Bird Castle.</p>
            <p>Information show as your account, edit your <router-link to="/account/profile">Profile</router-link> to
                booking in different places !</p>
        </div>
        <!-- form -->
        <div class="columns booking">
            <!-- part 1: user information -->
            <BookingUserInfo class="column"/>
            <!-- part 2: bird selection -->
            <BookingBirdSelect class="column"/>
            <!-- part 3: service and booking confirm -->
            <BookingServiceSelect class="column"/>
        </div>
        <div class="has-text-centered">
            <button class="button is-dark">Book now</button>
        </div>
    </div>
</template>

<script>
// import Bird_Info from '../components/modules/bird/Bird_Info.vue'
import BookingUserInfo from './BookingUserInfo.vue';
import BookingBirdSelect from './BookingBirdSelect.vue';
import BookingServiceSelect from './BookingServiceSelect.vue';
import { mapGetters } from 'vuex'
export default {
    name: 'Booking',
    data() {
        return {
            user_id: '',
            bird_selected: undefined,
            service_selected: [],
            date_from: '',
            date_to: '',
            term_and_condition: false,
        }
    },
    computed: {
        ...mapGetters(['getUser', 'serviceItems']),
    },
    methods: {
        submitForm() {
            if (this.bird_selected && this.service_selected.length > 0 && this.date_from && this.date_to && this.term_and_condition) {
                // this.$store.dispatch('booking', {
                //     user_id: this.getUser.user_id,
                //     bird_id: this.bird_selected.bird_id,
                //     service_id: this.service_selected,
                //     date_from: this.date_from,
                //     date_to: this.date_to
                // })
                console.log({
                    user_id: this.getUser.user_id,
                    bird_id: this.bird_selected.bird_id,
                    services: this.service_selected,
                    date_from: this.date_from,
                    date_to: this.date_to
                });
            } else {
                alert('Please fill all the form')
            }
        }
    },
    components: {
        // Bird_Info,
        BookingUserInfo,
        BookingBirdSelect,
        BookingServiceSelect
    }
}
</script>

<style scoped>
.main {
    padding: 40px;
}

.booking{
    margin-top: 40px;
    /* background-color: bisque; */
}
.booking div{
    background-color: rgb(255, 255, 255);
    margin: 15px;
    height: 600px;
    border: 0.6px solid rgb(230, 230, 230);
    border-radius: 20px;
    
}
.booking_info{

}
.booking_bird_select{

}
.booking_service_select{

}
</style>