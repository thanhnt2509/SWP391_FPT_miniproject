<template>
    <div>
        <!-- service introduction -->
        <div id="title">
            <h1>Welcome to Bird Oasis !!!</h1>
            <p>We are dedicated to providing top-quality care for your feathered friends and understand the importance of
                finding a comfortable and safe home for them. Our goal is to offer a comprehensive range of services and
                amenities to ensure that your pet bird thrives and lives a happy and healthy life.</p>
        </div>

        <!-- services -->
        <div class="columns is-multiline">
            <!-- each service -->
            <div class="column is-4" v-for="(service, index) in serviceItems.sort((a, b) => {
                if (a.isHighlight && !b.isHighlight) return -1;
                if (!a.isHighlight && b.isHighlight) return 1;
                return 0;
            })" :key="service.service_id">
                <div class="service">
                    <img class="img_service" :src="`http://localhost:5000/file/get_service_img/${service.image}`"
                        :alt="service.name">
                    <h3>{{ service.name }} <span v-if="service.isHighlight" class="tag">Best Selection </span></h3>
                    <p>{{ service.description }}</p>
                    <button disabled class="button is-info">Price: {{ service.price }}$ {{ service.isPack ? '/pack' : '' }}</button>
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
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}

#title {
    margin-bottom: 40px;
}

#title h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    margin: 2rem 0;
}

.service {
    position: relative;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    margin-top: 20px;
    width: 90%;
    height: 650px;
}

.service h3{
    font-size: 1.5rem;
    font-weight: 700;
}

.service p{
    text-indent: 2rem;
    text-align: justify;
}

.service button{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
}
.tag{
    display: inline;
    background-color: #B8957B;
    color: black;
    margin-left: 20px;
    padding: 3px 10px;
}

.img_service {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 40px;
}
</style>