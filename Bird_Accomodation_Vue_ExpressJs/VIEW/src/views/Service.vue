<template>
    <div class="container">
        <!-- service introduction -->
        <div class="content has-text-centered">
            <h1>Welcome to Bird Oasis !!!</h1>
            <p>We are dedicated to providing top-quality care for your feathered friends and understand the importance of
                finding a comfortable and safe home for them. Our goal is to offer a comprehensive range of services and
                amenities to ensure that your pet bird thrives and lives a happy and healthy life.</p>
        </div>

        <!-- services -->
        <div >
            <!-- each service -->
            <div class="columns service" v-for="service in serviceItems" :key="service.service_id">
                <div class="column"><img class="img_service" :src="'/images/' + service.image + '.jpg'" :alt="service.name"></div>
                <div class="content column is-three-quarters">
                    <h3 class="title is-4 is-spaced">{{ service.name }}</h3>
                    <p >{{ service.description }}</p>
                    <button disabled class="button is-info">Price: {{ service.price }}$</button>
                </div>
            </div>
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
}
.service{
    margin: 20px;
    border-radius: 40px;
    background-color: #f5f5f5;
    padding: 20px;
}
.img_service{
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 40px;
}
</style>