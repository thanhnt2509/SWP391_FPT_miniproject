<template>
    <!-- banner and image -->
    <section>
        <div class="banner-text hero-body has-text-centered">
            <p class="title">
                TREAT WITH CARE
            </p>
            <p class="subtitle">
                The place where you found the bird oasis !
            </p>
            <button @click="$router.push('/login')" class="button is-light has-text-centered banner-text-button">
                Start a journey
            </button>
        </div>
        <a-carousel autoplay>
            <img class="img_banner" src="/public/images/big-treehouse.jpg" alt="">
            <img class="img_banner" src="/public/images/bird-tree-hotel.jpg" alt="">
            <img class="img_banner" src="/public/images/bird-nesting.jpg" alt="">
            <img class="img_banner" src="/public/images/bird-food2-crop.jpg" alt="">
            <img class="img_banner" src="/public/images/big-treehouse.jpg" alt="">
        </a-carousel>
    </section>

    <div class="container has-text-centered">
        <!-- Selft introduction -->
        <div class="content is-normal self_info">
            <div>
                <div class="">
                    <h1 class="title">Bird Oasis</h1>
                </div>
                <p>Bird Oais is the pethouse for bird, provide various service and safe place for bird accommodation
                    With the well-trainer staff have experience in take care of various types of bird, we ensure that we
                    will
                    bring the best place and service for your bird</p>
                <button class="button is-info" @click="$router.push('/about')">
                    <i class="fa-solid fa-plus" style="padding: 0px; padding-right: 10px;"></i>More Information
                </button>
            </div>
        </div>

        <!-- Gallery -->
        <div>
            <div>
                <div class="columns">
                    <div class="column is-four-fifths">
                        <h1 class="title" style="padding-left: 200px;">Services</h1>
                    </div>
                    <div class="column"><button class="button is-light" @click="$router.push('/service')">Detail
                            Serivice</button> </div>
                </div>

                <p>Our goal is to offer a comprehensive range of services and amenities to ensure that your pet bird thrives
                    and
                    lives a happy and healthy life.</p>

            </div>
            <div class="columns is-multiline is-mobile">
                <!-- each facility -->
                <div class="column is-one-quarter" v-for="service in serviceItems" :key="service.service_id">
                    <h3>{{ service.name }}</h3>
                    <img class="img_service" :src="'/images/' + service.image + '.jpg'" :alt="service.image">
                </div>
            </div>
        </div>

        <!-- feedback from user -->
        <div>
            <div>
                <h1 class="title">Feedback from Customer</h1>
                <p>We are always listening to service thoughts to help us provide you with better services.</p>
            </div>

            <!-- each feedback -->
            <!-- <div v-for="reviewer in reviewItems" :key="reviewer.review_id">
                <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                </figure>
                <h3>Customer: {{ reviewer.name }}</h3>
                <p>Rating: {{ reviewer.rating }}</p>
                <p>Feedback after services: {{ reviewer.comment }}</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
export default {
    name: 'Homepage',
    computed: {
        ...mapGetters(['serviceItems', 'reviewItems'])
    },
    components: {
        LeftCircleOutlined,
        RightCircleOutlined,
    },
}
</script>

<style scoped>
.self_info {
    padding-bottom: 50px;
    background-color: rgb(230, 230, 230);
    border-radius: 40px;
}

.self_info p {
    padding: 0px 120px;
}

.banner-text {
    position: absolute;
    z-index: 1;
    left: 37%;
    top: 23%;
}

.banner-text p {
    font-family: sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #906F45;
    text-shadow: 2px 2px #cfcc98;
}

.banner-text-button {
    width: 375px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 30px;
}

.img_service {
    width: 300px;
    height: 300px;
}

* {
    padding-top: 10px;
}

.img_banner {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    object-position: right;
}

.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 600px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}
</style>