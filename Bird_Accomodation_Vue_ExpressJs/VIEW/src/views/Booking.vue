<template>
    <div class="container content main">
        <div class="has-text-centered">
            <h1 class="title">Booking</h1>
            <p>Here you can book your bird's stay at Bird Castle.</p>
            <p>Information show as your account, edit your <router-link to="/account/profile">Profile</router-link> to
                booking in different places !</p>
        </div>
        <!-- form -->
        <div>
            <div class="field">
                <label class="label">Fullname</label>
                <div class="control">
                    <input class="input is-success" disabled type="text" :value="getUser.name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" disabled type="email" :value="getUser.email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Phone</label>
                <div class="control">
                    <input class="input is-success" disabled type="tel" :value="getUser.phone">
                </div>
            </div>

            <div class="field">
                <label class="label">Address</label>
                <div class="control">
                    <input class="input is-success" disabled type="text" :value="getUser.address">
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <!-- select bird -->
                    <div class="field">
                        <label class="label">Select bird to Boarding</label>
                        <div class="control">
                            <select class="input select" v-model="bird_selected">
                                <!-- list of all bird registered from user -->
                                <option disabled>Please select your bird</option>
                                <option v-for="(bird, index) in getBirds" :key="bird.bird_id" :value="bird">{{
                                    bird.bird_name }}
                                </option>
                            </select>
                            <!-- bird select information -->
                            <Bird_Info v-if="bird_selected" :bird="bird_selected" noAction="true" />
                        </div>
                    </div>
                </div>
                <div class="column" style="padding-top: 200px;">
                    <!-- select service pack or customer service pack -->
                    <div>
                        <!-- list of service selected -->
                        <div class="field">
                            <label class="label">Service option</label>
                            <!-- list of service in our oasis -->
                            <div>
                                <ul>
                                    <li v-for="service in serviceItems"> <input type="checkbox"
                                            @change="service_selected.indexOf(service.service_id) === -1 ? service_selected.push(service.service_id) : service_selected.splice(service_selected.indexOf(service.service_id), 1)">
                                        {{ service.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- select date_from and date_to to Boarding -->
                    <div>
                        <div class="fields">
                            <label class="label">Arrival Date</label>
                            <input class="input" v-model="date_from" type="date" name="date_from">
                        </div>

                        <div class="fields">
                            <label l class="label">Departure Date</label>
                            <input class="input" v-model="date_to" type="date" name="date_to">
                        </div>
                    </div>
                    <div>
                        <label class="checkbox">
                            <input type="checkbox" v-model="term_and_condition">
                            Term and conditions
                        </label>
                    </div>

                    <div class=" has-text-centered">
                        <button class="button is-primary" @click="submitForm">Book now</button>
                    </div>
                </div>
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
        Bird_Info
    }
}
</script>

<style scoped>
.main {
    background-color: #f5f5f5;
    padding: 40px;
    border-radius: 40px;
}

.main div {
    margin-top: 10px;
}
</style>