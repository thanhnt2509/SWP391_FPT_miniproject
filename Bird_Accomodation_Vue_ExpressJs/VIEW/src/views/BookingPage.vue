<template>
    <div id="wrapper">
        <h1>Booking</h1>
        <p>Here you can book your bird's stay at Bird Oasis.</p>
        <!-- form -->
        <div class="columns">
            <!-- part 1: user information -->
            <BookingUserInfo />
            <!-- part 2: bird selection -->
            <BookingBirdSelect />
            <!-- part 3: service and booking confirm -->
            <BookingServiceSelect />
        </div>
        <div class="has-text-centered">
            <!-- <button @click="submitForm" class="button is-dark">Book now</button> -->
            <a-button style="padding: 15px; height: fit-content;" class="button is-dark" type="primary"
                @click="submitForm">Book now</a-button>
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

                        this.$store.dispatch('clearBooking')
                        this.$router.push('/');
                    } else {
                        message.error('Something went wrong !');
                    }
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
    },
    updated() {
        this.$store.dispatch('clearBooking')
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#wrapper {
    width: 80%;
    margin: 0 auto;
}

#wrapper h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
}

#wrapper p {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}
</style>