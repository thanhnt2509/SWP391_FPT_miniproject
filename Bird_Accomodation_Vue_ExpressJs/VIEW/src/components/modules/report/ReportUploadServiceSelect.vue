<template>
    <div class="column">
        <h1 class="title">Reference sevice to report</h1>
        <!-- getBookingServices: {{ serviceUpdate }} -->
        <table class="table is-hoverable">
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remain / Quantity</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="(service, index) in serviceUpdate">
                    <td>{{ index + 1 }}</td>
                    <td>{{ service.name }}</td>
                    <td>{{ service.current_price }}$</td>
                    <td v-if="service.isPack === 1"> pack</td>
                    <td v-else>{{ service.remain }} / {{ service.quantity }}</td>

                    <td v-if="service.isPack === 0">
                        <a-input-number :style="{ 'background-color': service.remain === 0 ? '#61C88A' : '' }"
                            v-model:value="service.remain" :min="0" :max="service.quantity" />
                        <p color="red" v-if="service.remain === 0">Complete</p>
                    </td>
                    <td v-else><a-switch :disabled="true" :checked="true" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "ReportUploadServiceSelect",
    data() {
        return {
            serviceUpdate: [],
        };
    },
    watch: {
        serviceUpdate: {
            handler: function (val) {
                this.$store.commit('SET_NEW_REPORT_UPDATE_LIST', this.serviceUpdate)
            },
            deep: true,
        },
    },
    computed: {
        ...mapGetters({
            getBookingServices: 'getBookingServices',   // get all booking service
            serviceItems: 'serviceItems',       // get all service
        }),
    },
    created() {
        this.serviceUpdate = this.getBookingServices;
    },
}
</script>