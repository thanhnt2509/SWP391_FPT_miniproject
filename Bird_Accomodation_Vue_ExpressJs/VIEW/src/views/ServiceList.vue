<template>
    <div class="columns">
        <ServiceListItem v-for="(service,index) in services" 
            :key="'service_'+index" 
            :service="service"
            class="column" 
            />
    </div>
    

</template>

<script>
import ServiceListItem from './ServiceListItem.vue'
export default {
    name: 'ServiceList',
    data() {
        return {
            
        }
    },
    props: {
        services: {
            type: Object,
            required: true
        }
    },
    components: {
        ServiceListItem
    }
}
</script>