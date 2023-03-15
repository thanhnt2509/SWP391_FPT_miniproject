<template>
    <div class="main column is-one-third">
        <h2 class="label has-text-centered">Customize your service
            <abbr title="The service pack selected will applies to your bird during boarding day">
                <i style="padding-left: 10px;" class="fa-solid fa-circle-question"></i>
            </abbr>
        </h2>
        <!-- serviceSelectedList {{ serviceSelectedList }} -->
        <!-- new booking service selected : {{ $store.getters.getNewBooking_service }} -->
        <div class="serviceList">
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </thead>
                <tr v-for="(service,index) in serviceSelectedList" :key="service.id">
                    <td>
                        <a-switch :disabled="service.isPack ? true : false" size="small" v-model:checked="serviceSelectedList[index].checked" />
                    </td>
                    <td>
                        <label :for="service.id">{{ service.name }}</label>
                        <!-- <p class="subtitle" v-if="service.isHighlight" style="color: red;">Best selection</p> -->
                    </td>
                    <td>
                        <label :for="service.id">{{ service.price }}</label>
                    </td>
                    <td>
                        <a-input-number type="number" v-if="!service.isPack" v-model="serviceSelectedList[index].quantity"
                            style="width: 100px; border: 0.2px solid #D7E9FF; border-radius: 10px; padding: 8px;" min="1"/>
                        <p v-else style="border: 0.2px solid #D7E9FF; border-radius: 10px; padding: 8px;">is Pack</p>
                    </td>
                </tr>
            </table>
        </div>
        <!-- all service: {{ serviceItems }} -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookingServiceSelect',
    data() {
        return {
            serviceSelectedList: [],
            checked: false
        }
    },
    watch: {
        serviceSelectedList: function (newVal, oldVal) {
            this.$store.dispatch('setServiceSelected', newVal)
        }
    },
    computed: {
        ...mapGetters(['serviceItems']),

    },
    methods: {

    },
    created() {
        this.serviceSelectedList = this.serviceItems.map(item => ({
            service_id: item.service_id,
            isHighlight: item.isHighlight,
            isPack: item.isPack,
            name: item.name,
            price: item.price,
            quantity: item.isPack ? 0 : 1,
            checked: item.isPack ? true : false,
        })).sort((a, b) => b.isPack - a.isPack);
    },
}
</script>

<style scoped>
.serviceList {
    padding: 10px;
    margin-top: 20px;
}

.main {
    padding: 10px 40px 30px 0;
}
</style>