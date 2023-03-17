<template>
    <!-- booking service: {{ getBookingServices }} <br>
    remainService: {{ remainService }} -->
    getNewServiceRegisterList: {{ getNewServiceRegisterList }}
    <!-- service update : {{ serviceUpdate }} -->
    <div class="columns">
        <div class="column">
            <h1>On use</h1>
            <table class="table is-hoverable">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Complete</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(service, index) in getBookingServices">
                        <!-- remain: {{ service.remain }}
                        quantity: {{ service.quantity }}
                        complete: {{ service.quantity - service.remain }} -->
                        <td>{{ index + 1 }}</td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.current_price }}$</td>

                        <td v-if="service.isPack === 1"> pack</td>
                        <td v-else>{{ service.remain }} / {{ service.quantity }}</td>

                        <td v-if="service.isPack === 1">
                            <a-switch :disabled="true" :checked="true" />
                        </td>
                        <td v-else><a-input-number :disabled="true" v-model:value="service.quantity" :min="1" :max="2" />
                        </td>
                        <!-- <td v-else><a-input-number v-model:value="service.quantity" :min="minQuantity" :max="2" /></td> -->
                    </tr>
                </tbody>
            </table>
            <b>Notes</b>: this function is not available yet
                <br> <p><i>- You can still add new service to this booking but you can not change the quantity of service currently used</i></p>
        </div>

        <div class="column">
            <h1>Register new service</h1>
            <table class="table is-hoverable">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(service, index) in remainService">
                        <!-- check: {{ service.checked }} -->
                        <td>{{ index + 1 }}</td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.price }}</td>
                        <td v-if="service.isPack === 1">pack</td>
                        <td v-else>
                            <a-input-number v-model:value="service.quantity" :min="1" :max="2" />
                        </td>
                        <td><a-switch v-model:checked="service.checked" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'TransactionNewServiceList',
    data() {
        return {
            // serviceUpdate: [],
            remainService: [],
        };
    },
    watch: {
        remainService: {
            handler: function (newVal, oldVal) {
                this.$store.commit('SET_NEW_SERVICE_REGISTER_LIST', this.remainService);
            },
            deep: true,
        },
    },
    methods: {
    },
    computed: {
        ...mapGetters({
            getBookingServices: 'getBookingServices',
            serviceItems: 'serviceItems',
            getNewServiceRegisterList: 'getNewServiceRegisterList',
        }),
    },
    created() {
        this.serviceUpdate = this.getBookingServices;

        // prepare data for serviceUpdate
        // this.serviceUpdate = this.serviceItems.map(item => ({
        //     service_id: item.service_id,
        //     isHighlight: item.isHighlight,
        //     isPack: item.isPack,
        //     name: item.name,
        //     price: item.price,
        //     quantity: item.isPack === 1 ? 0 : 1,
        //     checked: false,
        // }));

        // prepare data for remainService
        this.remainService = this.serviceItems.filter(service => {
            // filter to search all service that not contain in getBookingServices
            return !this.getBookingServices.some(bookingService =>
                bookingService.service_id === service.service_id
            );
        });
        // sort by isPack
        this.remainService.sort((a, b) => b.isPack - a.isPack);

        this.remainService = this.remainService.map(service => ({
            service_id: service.service_id,
            isHighlight: service.isHighlight,
            isPack: service.isPack,
            name: service.name,
            price: service.price,
            image: service.image,
            quantity: service.isPack === 1 ? 0 : 1,
            checked: false,
        }))
    }

}
</script>