<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');
</style>
<template>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
    <div class="body_home">
        <!-- SLOGAN - BRIEF ABOUT -->
        <div class="slogan text_center">
            <div class="slogan_content">
                <h5>Creating a warm and welcoming environment for birds of all types</h5>
                <h1 class="slogan_header">Treat with care</h1>
                <p>The place where you found the Bird Oasis !!!</p>
                <div class="slogan_content_button btn">
                    <button><RouterLink to="/booking">BOOK NOW</RouterLink></button>
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
                <button>+ Information</button>
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
                            <button>Details</button>
                        </div>
                    </div>

                </div>
            </div>



            <!-- Realife Images and feedback from customer -->
            <div class="checkin">

                <!-- with images from customer: sliding images -->
                <div class="checkin_header xxlarge">
                    <h2>IMAGES FROM CUSTOMER</h2>
                </div>
                <div class="checkin_images">
                    <div class="checkin_images_each_img">
                        img1, img2, img3, ...
                    </div>
                    <div class="checkin_images_pagination">
                        page1, page2, page3, ...
                    </div>
                </div>

                <!-- feedback and star from customer -->
                <div class="checkin_header xxlarge">
                    <h2>REVIEW</h2>
                </div>
                <div class="checkin_feedback" v-for="{ review_id, rating, comment, user_name } in ReviewList.reviewList"
                    :key="review_id">
                    <div class="checkin_feedback_each">
                        <div class="checkin_feedback_start">
                            Rating point: {{ rating }}
                        </div>
                        <div class="checkin_feedback_content">
                            Comment: {{ comment }}
                        </div>
                        <div class="checkin_feedback_name">
                            Name: {{ user_name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import ServiceList from '../dum_data/Service'
import ReviewList from '../dum_data/Review'
</script>

<style scoped>
.body_home {}

.slogan {
    height: 650px;
    background-image: url('../components/images/3Bird.jpg');
    background-size: cover;
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

.slogan_content_button button{
    color: rgb(222, 238, 252);
    background-color: #8DA342;
    border-color: #66772c;
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

.body_sizing{
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