<template>
    <!-- remain: {{ remainService }} <br> -->
    <!-- booking service: {{ getBookingServices }} <br> -->
    <!-- service update : {{ serviceUpdate }} -->
    <div class="columns">
        <div class="column">
            <h1>On use</h1>
            <table class="table is-hoverable">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remain</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(service, index) in getBookingServices">
                        <td>{{ index + 1 }}</td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.current_price }}$</td>
                        <td v-if="service.isPack === 1"> pack</td>
                        <td v-else>{{ service.remain }} / {{ service.quantity }}</td>
                        <td v-if="service.isPack === 0">
                            <a-input-number v-model:value="service.quantity" :min="service.remain" :max="10" />
                        </td>
                        <td v-else><a-switch :disabled="true" :checked="true" /></td>
                    </tr>
                </tbody>
            </table>
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
                        <td>{{ index + 1 }}</td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.price }}</td>
                        <td v-if="service.isPack === 1">pack</td>
                        <td v-else>
                            <a-input-number v-model:value="service.quantity" :min="1" :max="10" />
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
            serviceUpdate: [],
        };
    },
    methods: {

    },
    computed: {
        ...mapGetters({
            getBookingServices: 'getBookingServices',
            serviceItems: 'serviceItems',
        }),

        remainService() {
            const remain = this.serviceItems.filter(service => {
                // filter to search all service that not contain in getBookingServices
                return !this.getBookingServices.some(bookingService =>
                    bookingService.service_id === service.service_id
                );
            });
            remain.forEach(service => {
                service.quantity = service.isPack === 1 ? 0 : 1;
                service.checked = false;
            })
            // code not work
            // remain.map(service => {
            //     return {
            //         service_id: service.service_id,
            //         name: service.name,
            //         price: service.price,
            //         isPack: service.isPack,
            //         isHighlight: service.isHighlight,
            //         quantity: service.isPack === 1 ? 0 : 1,
            //         checked: false,
            //     }
            // })
            return remain;
        }
    },
    created() {
        this.serviceUpdate = this.getBookingServices;

        // prepare data for serviceUpdate
        this.serviceUpdate = this.serviceItems.map(item => ({
            service_id: item.service_id,
            isHighlight: item.isHighlight,
            isPack: item.isPack,
            name: item.name,
            price: item.price,
            quantity: item.isPack ? 0 : 1,
            checked: item.isPack ? true : false,
        }))
    }

}
</script>