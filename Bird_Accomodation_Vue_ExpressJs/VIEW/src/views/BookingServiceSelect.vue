<template>
    <div class="main column is-one-third">
        <h2 class="label has-text-centered">Customize your service
            <abbr title="The service pack selected will applies to your bird during boarding day">
                <i style="padding-left: 10px;" class="fa-solid fa-circle-question"></i>
            </abbr>
        </h2>
        <div class="serviceList">
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </thead>
                <tr v-for="service in serviceItems" :key="service.id">
                    <td>
<!--                        <input class="checkbox" style="border-radius: 20%; padding: 5px;" type="checkbox" :id="service.id"-->
<!--                            @change="onServiceSelected">-->
                        <a-switch size="small" v-model:checked="checked" />
                    </td>
                    <td>
                        <label :for="service.id">{{ service.name }}</label>
                    </td>
                    <td>
                        <label :for="service.id">{{ service.price }}</label>
                    </td>
                    <td>
                        <input type="number"
                            style="width: 100px; border: 0.2px solid black; border-radius: 10px; padding: 8px;" min="1">
                    </td>
                </tr>
            </table>
        </div>
        Service selected: {{ service_selected }}
    </div>
</template>
// service_selected.indexOf(service.service_id) === -1 ?
// service_selected.push({ service_id: service.service_id }) :
// service_selected.splice(service_selected.indexOf(service.service_id), 1)
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookingServiceSelect',
    data() {
        return {
            service_selected: [],
            checked: false
        }
    },
    watch: {
        service_selected: {
            handler: function (val) {
                this.$store.dispatch('setServiceSelected', this.service_selected);
            },
            deep: true
        },
    },
    computed: {
        ...mapGetters(['serviceItems']),

    },
    methods: {
        onServiceSelected(evt) {

        }
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