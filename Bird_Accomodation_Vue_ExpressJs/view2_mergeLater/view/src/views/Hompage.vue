<template>
    <!-- banner and image -->
    <div>
        <div>image goes here</div>
        <div>
            <h1>TREAT WITH CARE</h1>
            <p>The place where you found the bird oasis !</p>
        </div>
    </div>

    <!-- Selft introduction -->
    <div>
        <div>
            <h1>Bird Oasis</h1>
            <p>Bird Oais is the pethouse for bird, provide various service and safe place for bird accommodation
                With the well-trainer staff have experience in take care of various types of bird, we ensure that we will bring the best place and service for your bird</p>
            <button>More Information</button>
        </div>
    </div>

    <!-- Gallery -->
    <div>
        <div>
            <h1>Facilities</h1>
            <p>Our goal is to offer a comprehensive range of services and amenities to ensure that your pet bird thrives and lives a happy and healthy life.</p>
        </div>
        <div>
            <!-- each facility -->
            <div v-for="service in serviceItems" :key="service.service_id">
                <h3>{{ service.name }}</h3>
                <img :src="'/images/'+ service.image +'.jpg'" :alt="service.image">
            </div>
        </div>
    </div>

    <!-- feedback from user -->
    <div>
        <div>
            <h1>Feedback from Customer</h1>
            <p>We are always listening to service thoughts to help us provide you with better services.</p>
        </div>

        <!-- each feedback -->
        <div v-for="reviewer in reviewItems" :key="reviewer.review_id">
            <p>Show images here {{ reviewer.user_img }}</p>
            <h3>Customer: {{ reviewer.name }}</h3>
            <p>Rating: {{ reviewer.rating }}</p>
            <p>Feedback after services: {{ reviewer.comment }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Homepage',
    computed: {
        ...mapGetters(['serviceItems', 'reviewItems'])
    }
}
</script>

<style scoped>
img {
    width: 300px;
    height: 300px;
}
</style>