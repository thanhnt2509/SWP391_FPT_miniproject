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
            <BookingUserInfo />
            <!-- part 2: bird selection -->
            <BookingBirdSelect />
            <!-- part 3: service and booking confirm -->
            <BookingServiceSelect />
        </div>
        <div class="has-text-centered">
            <!-- <button @click="submitForm" class="button is-dark">Book now</button> -->
            <a-button style="padding: 15px; height: fit-content;" class="button is-dark" type="primary" @click="submitForm">Book now</a-button>
        </div>
    </div>
</template>

<script>
// import Bird_Info from '../components/modules/bird/Bird_Info.vue'
import BookingUserInfo from './BookingUserInfo.vue';
import BookingBirdSelect from './BookingBirdSelect.vue';
import BookingServiceSelect from './BookingServiceSelect.vue';
import { mapGetters } from 'vuex';
import { message, Modal } from 'ant-design-vue';
import { h } from "vue";
export default {
    name: 'Booking',
    data() {
        return {
            isSuccess: false,
        }
    },
    setup() {

    },
    computed: {
        ...mapGetters(['getUser', 'getNewBooking', 'newBookingisOk']),
    },
    methods: {
        submitForm() {
            if (!this.newBookingisOk) {
                message.error('Please select all fields !');
            }
            else {
                try {
                    const { bird_selected_id, service_selected,
                        date_from, date_to } = this.getNewBooking;

                    const booking = {
                        user_id: this.getUser.user_id,
                        bird_id: bird_selected_id,
                        services: service_selected,
                        date_from: date_from,
                        date_to: date_to,
                    }

                    console.log(booking);
                    const success = this.$store.dispatch('createNewBooking', booking);

                    if (success) {
                        // sync data
                        this.$store.dispatch('getAllBooking');
                        this.$store.dispatch('getAllBirds');

                        Modal.success({
                            title: 'Booking successfully !',
                            content: h('div', {}, [
                                h('p', 'Perform booking successfuly !'),
                                h('p', 'Thank you for using our service !'),
                                h('p', 'Please check your transaction history !'),
                            ]),
                        });
                        
                    }
                    this.$store.dispatch('clearBooking')
                    this.$router.push('/account/transaction');
                } catch (error) {
                    console.log(error);
                    message.error('Something went wrong !');
                }
            }
        },
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

.booking {
    margin-top: 40px;
    /* background-color: bisque; */
}

.booking div {
    background-color: rgb(255, 255, 255);
    margin: 15px;
    /*height: 649px;*/
    overflow: hidden;
    border: 0.6px solid rgb(230, 230, 230);
    border-radius: 20px;

}

.booking_info {}

.booking_bird_select {}

.booking_service_select {}
</style>