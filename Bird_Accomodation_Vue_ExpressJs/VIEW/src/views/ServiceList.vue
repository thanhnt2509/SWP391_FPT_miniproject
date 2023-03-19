<template>
    <!-- services: {{ services }} -->
    <div class="columns wrapper">
        <div v-for="service in services" class="column wrapper_box">
            <!-- service: {{ service }} -->
            <div class="wapper_box_img">
                <img :src="`http://localhost:5000/file/get_service_img/${service.image}`" alt="">
            </div>
            <div class="wapper_box_text">
                {{service.name}} <abbr v-if="service.isHighlight" title="Best selection"><i class="fa-solid fa-crown"></i></abbr>
            </div>
        </div>

    </div>
</template>

<script>
import ServiceListItem from './ServiceListItem.vue'
export default {
    name: 'ServiceList',
    props: {
        services: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ServiceListItem
    }
}
</script>

<style scoped>
.wrapper{

}

.wrapper_box{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    height: 500px;
    position: relative;
}
.wapper_box_img{
    width: 100%;
    height: 100%;
}

.wapper_box_img img{
    width: 100%;
    height: 100%;
}
.wapper_box_text{
    width: 100%;
    position: absolute;
    bottom: 1%;
    color: white;
    font-weight: 700;
    font-size: larger;
    left: 0%;
    word-wrap: break-word;
    text-align: left;
    padding-left: 10px;
}
</style>