<template>
    <div class="main">
        <h1 class="title has-text-centered">Service remain</h1>
        <table style="width: 100%;">
            <thead>
                <th>Name</th>
                <th class="has-text-centered">Completed</th>
                <th>Progress</th>
            </thead>
            <tr v-for="service in getBookingServices">
                <td width="100px" style="overflow: hidden;"><p style="width: inherit;">{{ service.name }}</p></td>
                <td class="has-text-centered" v-if="service.isPack === 0">{{ service.quantity - service.remain }} / {{ service.quantity }}</td>
                <td class="has-text-centered" v-else>Pack selected</td>
                <td><a-progress :percent="serviceRemainPercent(service)" :show-info="true" /></td>
            </tr>
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
        serviceRemainPercent(service){
            if(service.isPack === 1) return 100;
            else {
                let remain = service.remain;
                let quantity = service.quantity;
                let complete = quantity - remain;
                return Math.round((complete/quantity)*100);
            }
        }
    }
}
</script>

<style scoped>
.main{
    padding: 10px;
    margin-bottom: 40px;
}
</style>