<template>
    <!-- service introduction -->
    <div>
        <h1>Welcome to Bird Oasis !!!</h1>
        <p>We are dedicated to providing top-quality care for your feathered friends and understand the importance of
            finding a comfortable and safe home for them. Our goal is to offer a comprehensive range of services and
            amenities to ensure that your pet bird thrives and lives a happy and healthy life.</p>
    </div>

    <!-- services -->
    <div>
        <h2>Our Services</h2>
        <p>At Bird Castle, we understand the special bond between pet and owner, and we are dedicated to providing your bird
            with the best care possible. Contact us today to learn more about our services and to find the perfect home for
            your feathered friend.</p>
            
        <!-- each service -->
        <div v-for="service in serviceItems" :key="service.service_id">
            <h3>{{ service.name }}</h3>
            <img :src="'/images/' + service.image + '.jpg'" :alt="service.name">
            <p>Description: {{ service.description }}</p>
            <p>Price: {{ service.price }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Service",
    computed: {
        ...mapGetters(['serviceItems'])
    }
}
</script>

<style scoped>
img {
    width: 300px;
    height: 300px;
}</style>