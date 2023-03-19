<template>
    <div class="container">
        <!-- service introduction -->
        <div class="content has-text-centered self_info">
            <h1>Welcome to Bird Oasis !!!</h1>
            <p>We are dedicated to providing top-quality care for your feathered friends and understand the importance of
                finding a comfortable and safe home for them. Our goal is to offer a comprehensive range of services and
                amenities to ensure that your pet bird thrives and lives a happy and healthy life.</p>
        </div>

        <!-- services -->
        <div class="columns is-multiline">
            <!-- each service -->
            <div class="column is-4 " v-for="(service, index) in serviceItems.sort((a, b) => {
                if (a.isHighlight && !b.isHighlight) return -1;
                if (!a.isHighlight && b.isHighlight) return 1;
                return 0;
            })" :key="service.service_id">
                <div class="service">
                    <img class="img_service" :src="`http://localhost:5000/file/get_service_img/${service.image}`" :alt="service.name">
                    <div class="content  is-three-quarters">
                        <div style="text-align: center;">
                            <h3 class="title">{{ service.name }} <abbr v-if="service.isHighlight" title="Best selection"><i class="fa-solid fa-crown"></i></abbr></h3>
                            <p style="text-align: left;">{{ service.description }}</p>
                            <button disabled class="button is-info">Price: {{ service.price }}$ {{ service.isPack ? '/pack' : '' }}</button>
                        </div>
                    </div>
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
.self_info {
    margin: 20px;
    padding: 20px;
}

.self_info P {
    font-size: 20px;
    padding: 10px 40px 10px 40px;
}

img {
    width: 300px;
    height: 300px;
}

.service {
    height: 595px;
    margin: 20px;
    border-radius: 40px;
    background-color: #f5f5f5;
    padding: 20px;
}

.img_service {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 40px;
}
</style>