<template>
    <div class="body_home">
        <!-- SLOGAN - BRIEF ABOUT -->
        <div class="slogan text_center">
            <div class="slogan_content">
                <h5>Creating a warm and welcoming environment for birds of all types</h5>
                <h1 class="slogan_header">Treat with care</h1>
                <p>The place where you found the Bird Oasis !!!</p>
                <div class="slogan_content_button btn">
                    <RouterLink to="/booking">
                        <button>
                            BOOK NOW
                        </button>
                    </RouterLink>

                </div>
            </div>


        </div>


        <!-- About us -->
        <div class="about text_center">
            <div class="about_header xxlarge">
                <h2>BIRD CASTLE</h2>
            </div>
            <div class="about_content large">
                <p>Bird Hotel is the pethouse for bird, provide various service and safe place for bird accommodation
                </p>
                <p>With the well-trainer staff have experience in take care of various types of bird, we ensure that we
                    will bring the best place and service for your bird</p>
            </div>
            <div class="about_detail_button btn">
                <button>
                    <RouterLink to="/about">+ Information</RouterLink>
                </button>
            </div>
        </div>

        <div class="body_sizing">
            <!-- SERVICE -->
            <div class="content">
                <div class="service">
                    <div class="service_header">
                        <div class="service_header_text xxlarge">
                            <h2>SERVICE</h2>
                        </div>
                        <div class="service_header_button btn">
                            <button>
                                <RouterLink to="/service">Show more</RouterLink>
                            </button>
                        </div>
                    </div>
                    <div style="background-color: white; padding: 20px">
                        <a-row :gutter="16">
                            <a-col :span="8">
                                <a-card title="Bird play areas" :bordered="false">
                                    <img src="../components/images/bird-play-area.jpg" alt="">
                                </a-card>
                            </a-col>
                            <a-col :span="8">
                                <a-card title="Bird training" :bordered="false">
                                    <img src="../components/images/bird_train.jpg" alt="" />
                                </a-card>
                            </a-col>
                            <a-col :span="8">
                                <a-card title="Bird photography" :bordered="false">
                                    <img src="../components/images/bird_phototgraphy.jpg" alt="" />
                                </a-card>
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </div>



            <!-- Realife Images and feedback from customer -->
            <div class="checkin">

                <!-- with images from customer: sliding images -->
                <div class="checkin_content">
                    <a-card title="Images and Feedback from User">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">

                            <div v-for="(feedback, index) in feedbacks" :key="index"
                                style="display: flex; margin-bottom: 16px;">
                                <img :src="feedback.image"
                                    style="width: 150px; height: 150px; object-fit: cover; margin-right: 16px;"
                                    :alt="feedback.name" />
                                <div style="display: flex; flex-direction: column;">
                                    <div style="display: flex; align-items: center;">
                                        <h3 style="margin-right: 8px;">{{ feedback.name }}</h3>
                                        <a-rate :value="feedback.rating" disabled style="font-size: 24px;" />
                                    </div>
                                    <p style="margin-top: 8px;">{{ feedback.feedback }}</p>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; flex-wrap: wrap;">
                            <!-- Images from user -->
                            <img v-for="(image, index) in images" :key="index" :src="image.url"
                                style="width: 150px; height: 150px; margin-right: 24px; margin-bottom: 24px;"
                                :alt="image.name" />
                        </div>
                    </a-card>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>


import { RouterLink } from 'vue-router';
import ReviewList from '../dum_data/Review'
const feedbacks = [{
    name: 'John Doe',
    image: 'https://picsum.photos/64',
    rating: 4,
    feedback: 'The service is very good !',
},
{
    name: 'Jerry',
    image: 'https://picsum.photos/64',
    rating: 4,
    feedback: 'The service is very good !',
},
{
    name: 'Jane Doe',
    image: 'https://picsum.photos/64',
    rating: 5,
    feedback: 'My bird is so enerytic now !!',
},]


</script>

<style scoped>
* {
    font-family: Arial, sans-serif;
}

img {
    object-fit: cover;
    object-position: center;
    width: 360px;
    height: 360px;
}

.checkin_content {
    padding-top: 40px;
}

.body_home {}

.slogan {
    height: 650px;
    background-image: url('../components/images/bird_wallpaper2.jpg');
    background-size: cover;
    background-position-x: 50px;
}

.slogan_content {
    font-size: 20px;
    height: 100%;
    width: 100%;
    padding-top: 200px;
    padding-right: 50%;
}

.slogan_content * {
    margin: auto;
    color: rgb(222, 238, 252);
}

.slogan_content_button button {
    color: rgb(222, 238, 252);
    background-color: #e2c471;
    border: 1px solid #c0b494;
    box-shadow: #c0b494;
    margin-top: 10px;
}

.text_center {
    text-align: center;
}

.slogan_header {
    font-weight: bolder;
    font-size: 40px;
    text-transform: uppercase;
    text-decoration: underline;
}

.xxlarge {
    font-size: xx-large;
}

.large {
    font-size: large;
}

.btn button {
    padding: 10px 20px;
}

.body_sizing {
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
}

.service {
    width: 100%;
}

.service_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.service_header_text {}

.service_header_button button {
    margin: 20px;
}

.service_box {
    display: flex;
    justify-content: space-around;
    width: 100%
}

.service_content {
    height: fit-content;
    border: 1px solid black;
}
</style>