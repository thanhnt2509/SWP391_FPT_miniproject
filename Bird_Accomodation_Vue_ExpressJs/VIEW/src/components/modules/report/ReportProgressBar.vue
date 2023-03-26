<template>
    <div id="wrapper_bar">
        <h1>On-use Service info</h1>
        <p>Infomation about the service are used during boarding</p>
        <table class="table is-fullwidth">
            <thead>
                <th>Name</th>
                <th class="has-text-centered">Completed</th>
                <th>Progress</th>
            </thead>
            <tbody>
                <tr v-for="service in getBookingServices">
                    <td width="100px" style="overflow: hidden;">
                        <p style="width: inherit;">{{ service.name }}</p>
                    </td>
                    <td class="has-text-centered" v-if="service.isPack === 0">{{ service.quantity - service.remain }} / {{
                        service.quantity }}</td>
                    <td class="has-text-centered" v-else>Pack selected</td>
                    <td><a-progress :percent="serviceRemainPercent(service)" :show-info="true" /></td>
                </tr>
            </tbody>
        </table>

        <!-- test {{ getBookingServices }} -->
        <!-- <a-progress :percent="30" />
        <a-progress :percent="50" status="active" />
        <a-progress :percent="70" status="exception" />
        <a-progress :percent="100" />
        <a-progress :percent="50" :show-info="false" /> -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ReportProgressBar',
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            getBookingServices: 'getBookingServices',
        })
    },
    methods: {
        serviceRemainPercent(service) {
            if (service.isPack === 1) return 100;
            else {
                let remain = service.remain;
                let quantity = service.quantity;
                let complete = quantity - remain;
                return Math.round((complete / quantity) * 100);
            }
        }
    },
    mounted() {
        this.$store.dispatch('getAllServiceOfBooking_id', this.$route.params.booking_id);
        this.getBookingServices = this.$store.getters.getBookingServices;
    },
    created() {
        this.$store.dispatch('getAllServiceOfBooking_id', this.$route.params.booking_id);
        this.getBookingServices = this.$store.getters.getBookingServices;
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Popins', sans-serif;
}

#wrapper_bar {
    padding: 0;
    margin: 0 0 0 10%;
}

#wrapper_bar h1 {
    font-weight: 650;
    font-size: 2rem;
    text-align: center;
}

#wrapper_bar p {
    font-size: 1rem;
    text-align: center;
}

thead th {
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
}</style>