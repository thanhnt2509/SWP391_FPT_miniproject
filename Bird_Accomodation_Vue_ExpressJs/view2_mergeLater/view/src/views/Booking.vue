<template>
    <div>
        <div>
            <h1>Booking</h1>
            <p>Here you can book your bird's stay at Bird Castle.</p>
            <p>Information show as your account, edit your <router-link to="/account/profile">Profile</router-link> to
                booking in different places !</p>
        </div>
        <!-- form -->
        <div>
            <div>
                <label>Fullname</label>
                <input disabled type="text" :value="getUser.name">
            </div>

            <div>
                <label>Email</label>
                <input disabled type="email" :value="getUser.email">
            </div>

            <div>
                <label>Phone</label>
                <input disabled type="tel" :value="getUser.phone">
            </div>

            <div>
                <label>Address</label>
                <input disabled type="text" :value="getUser.address">
            </div>

            <!-- select bird -->
            <div>
                <label>Select bird to Boarding</label>
                <select v-model="bird_selected">
                    <!-- list of all bird registered from user -->
                    <option disabled>Please select your bird</option>
                    <option v-for="(bird, index) in getBirds" :key="bird.bird_id" :value="bird">{{ bird.bird_name }}</option>
                </select>
                <!-- bird select information -->
                <Bird_Info v-if="bird_selected" :bird="bird_selected" noAction=true />
            </div>

            <!-- select service pack or customer service pack -->
            <div>
                <!-- list of service selected -->
                <div>
                    <label>Service option</label>
                    <!-- list of service in our oasis -->
                    <ul>
                        <li v-for="service in serviceItems"> <input type="checkbox"
                                @change="service_selected.indexOf(service.service_id) === -1 ? service_selected.push(service.service_id) : service_selected.splice(service_selected.indexOf(service.service_id), 1)">
                            {{ service.name }}</li>
                    </ul>
                </div>
            </div>
            <p>{{ service_selected }}</p>

            <!-- select date_from and date_to to Boarding -->
            <div>
                <div>
                    <label>Arrival Date</label>
                    <input v-model="date_from" type="date" name="date_from">
                </div>

                <div>
                    <label>Departure Date</label>
                    <input v-model="date_to" type="date" name="date_to">
                </div>
            </div>

            <div>
                <input type="checkbox" v-model="term_and_condition">
                <label>Term and conditions</label>
            </div>

            <div>
                <button @click="submitForm">Book now</button>
            </div>
        </div>
    </div>
</template>

<script>
import Bird_Info from '../components/bird/Bird_Info.vue'
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
        ...mapGetters(['getUser', 'getBirds', 'serviceItems']),
    },
    methods: {
        submitForm(){
            if(this.bird_selected && this.service_selected.length > 0 && this.date_from && this.date_to && this.term_and_condition){
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
            }else{
                alert('Please fill all the form')
            }
        }
    },
    components: {
        Bird_Info
    }
}
</script>