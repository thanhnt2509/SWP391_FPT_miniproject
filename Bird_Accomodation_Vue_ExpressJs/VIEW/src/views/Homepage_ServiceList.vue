<template>
    <!-- services: {{ services }} -->
    <section id="second_section">
        <div class="each_service" v-for="service in services">
            <img :src="`http://localhost:5000/file/get_service_img/${service.image}`" alt="">
            <p>{{ service.name }}<span class="tag"><i class="fa-solid fa-crown" style="margin-right: 10px;"></i>Best Selection </span></p>
        </div>
    </section>
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
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#second_section {
    width: 90%;
    margin: 0 auto 60px auto;
    display: flex;
}

.each_service {
    position: relative;
}

.each_service img {
    width: 400px;
    height: 100%;
    object-fit: cover;
}

.each_service p {
    position: absolute;
    font-weight: 600;
    font-size: 1.25rem;
    color: white;
    left: 0;
    bottom: 0;
    padding: 0 0 20px 20px;
}

.tag{
    background-color: #B8957B;
    color: black;
    margin-left: 20px;
}
</style>