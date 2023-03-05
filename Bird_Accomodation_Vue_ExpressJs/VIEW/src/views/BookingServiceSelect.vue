<template>
    <div class="main">
        <h2 class="label has-text-centered">Customize your service</h2>
        <div class="serviceList">
            <table>
                <tr v-for="service in serviceItems" :key="service.id">
                    <td>
                        <input type="checkbox" :id="service.id"
                            @change="service_selected.indexOf(service.service_id) === -1 ? service_selected.push(service.service_id) : service_selected.splice(service_selected.indexOf(service.service_id), 1)">
                    </td>
                    <td>
                        <label :for="service.id">{{ service.name }}</label>
                    </td>
                    <td>
                        <label :for="service.id">{{ service.price }}$/night</label>
                    </td>
                </tr>
            </table>
        </div>
        {{ service_selected }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookingServiceSelect',
    data() {
        return {
            checked: false,
            service_selected: [],
        }
    },
    computed: {
        ...mapGetters(['serviceItems']),

    },
    methods: {

    }
}
</script>

<style scoped>
.serviceList{
    padding: 10px;
    margin-top: 20px;
}
.main {
    padding: 10px 40px 30px 0;
}
</style>