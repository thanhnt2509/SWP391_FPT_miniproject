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
            <img class="img_banner" v-for="img in bannerImg" :src="img" alt="">
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

        <!-- Service -->
        <div>
            <div class="columns">
                <div class="column is-four-fifths">
                    <h1 class="title" style="padding-left: 200px;">Our Feathered Guests' Services</h1>
                    <p style="">Our Feathered Guests' Services" include clean and spacious cages, fresh food and water
                        daily,
                        bird-safe toys, and caring staff to monitor your bird's health and behavior. We also offer bird
                        grooming, exercise and socialization opportunities, and personalized care to ensure your bird is
                        comfortable and happy. Contact us today to learn more!</p>
                </div>
                <div class="column"><button class="button is-info is-light" @click="$router.push('/service')">Detail
                        Serivice</button> </div>
            </div>

            <!-- list all service -->
            <ServiceList :services="services" />
        </div>

        <!-- Highlight section -->
        <div style="margin: 50px">
            <div>
                <div>
                    <h1 style="margin-bottom: 41px;" class="title has-text-centered">What Sets Us Apart</h1>
                </div>
                <div>
                    <div class="h columns">
                        <div class="h_img column is-two-thirds">
                            <img src="/public/images/big-treehouse.jpg" alt="">
                        </div>
                        <div class="h_list column">
                            <div class="h_list_item" v-for="h in hItems">
                                <div class="h_list_item_title">
                                    {{ h.title }}
                                </div>
                                <div class="h_list_item_content">
                                    {{ h.content }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- feedback from user -->
        <div>
            <div style="margin-bottom: 50px;">
                <h1 class="title" style="margin-top: -35px;">Testimonials from Bird Owners</h1>
                <p>We are always listening to service thoughts to help us provide you with better services.</p>
            </div>

            <div class="columns" style="margin-bottom: 50px;">
                <article class="column columns is-half message feedback">
                    <div class="message-body column feedback_img">
                        <img src="/public/images/bird-housing.jpg" alt="">
                    </div>
                    <div class="column feedback_content">
                        <h2>Jhon love parrot!</h2>
                        <div><a-rate :value="4.5" disabled allow-half/></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                        tempus
                        quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                        diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis
                        lectus.
                    </div>
                </article>
                <article class="column columns is-half message feedback">
                    <div class="message-body column feedback_img">
                        <img src="/public/images/bird-housing.jpg" alt="">
                    </div>
                    <div class="column feedback_content">
                        <h2>Jhon love parrot!</h2>
                        <div><a-rate :value="4.5" disabled allow-half/></div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
                        tempus
                        quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                        diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis
                        lectus.
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ServiceList from './ServiceList.vue';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
export default {
    name: 'Homepage',
    data() {
        return {
            bannerImg: [
                '/public/images/big-treehouse.jpg',
                '/public/images/bird-tree-hotel.jpg',
                '/public/images/bird-nesting.jpg',
                '/public/images/bird-food2-crop.jpg',
                '/public/images/Bird Photography.jpg',
            ],
            services: [
                {
                    name: 'Boarding',
                    image: '/public/images/bird-tree-hotel.jpg',
                    description: 'What makes us the best dog hotel for your furry.'
                },
                {
                    name: 'Training',
                    image: '/public/images/bird-training.jpg',
                    description: 'What makes us the best dog hotel for your furry friend? '
                },
                {
                    name: 'Photography',
                    image: '/public/images/bird-photography.jpg',
                    description: 'What makes us the best dog hotel for your furry.'
                },
                {
                    name: 'Play area',
                    image: '/public/images/bird-play-area.jpg',
                    description: 'What makes us the best dog hotel for your furry friend? '
                },
            ],
            hItems: [
                {
                    title: 'Oasis Care system',
                    content: 'we ensure our facilities are not only spotless, but fully sanitized, and smell clean, so that your dog stays healthy while in our care.'
                },
                {
                    title: 'Oasis Staff experience',
                    content: 'We are proud to lead the way in the luxury pet hospitality industry, and provide world class accommodations and service to our guests so that your dog is happy, comfortable, and relaxed.'
                },
                {
                    title: 'Oasis training system',
                    content: 'Bird training involves teaching birds to perform specific behaviors on command through positive reinforcement techniques. This can include anything from basic obedience training to teaching tricks and advanced behaviors.'
                },
                {
                    title: 'Oasis Boarding system',
                    content: 'Boarding birds is the act of temporarily housing birds in a specialized facility or with a professional caregiver while their owners are away. This ensures that the birds receive proper care and attention in their owner sabsence'
                },
            ]

        }
    },
    computed: {
        // ...mapGetters(['reviewItems'])
    },
    components: {
        LeftCircleOutlined,
        RightCircleOutlined,
        ServiceList
    },
}
</script>

<style scoped>
.feedback{
    height: 225px;
    margin-right: 20px;
    padding: 0;
    margin: 0;
}
.feedback_img img{
    border-radius: 10px;
}
.feedback_content{
    padding: 10px;
    overflow: hidden;
    text-align: left;
}
.h_img img {
    object-fit: cover;
    object-position: top;
    height: 600px;
    width: 100%;
}

.h_list {}

.h_list_item {
    padding: 10px;
    margin-bottom: 15px;
}

.h_list_item_title {
    font-size: x-large;
}

.h_list_item_content {}

.services_content {
    background-color: bisque;
    height: 300px;
}

.services_content_text {
    background-color: #b9a68c;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
}

.services_content_img {}

.self_info {
    margin-top: 20px;
    padding-top: 10px;
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
}</style>