<template>
    <div class="body_home">
        <!-- SLOGAN - BRIEF ABOUT -->
        <div class="slogan text_center">
            <h5>Creating a warm and welcoming environment for birds of all types</h5>
            <h1 class="slogan_header">Treat with care</h1>
            <p>The place where you found the Oasis for bird !!!</p>
        </div>


        <!-- SERVICE -->
        <div class="service" v-for="service in ServiceList.serviceList" :key="service.id ">
            <div class="each_service">
                <div class="service_header">
                    <h3>{{ service.name }}</h3>
                </div>
                <div class="service_content">
                    <p>{{ service.description }}</p>
                </div>
            </div>

        </div>
        <!-- End service -->

    
        <!-- About us -->
        <div class="about">
            <div class="about_header">
                <h2>ABOUT BIRD HOTEL</h2>
            </div>
            <div class="about_content">
                <p>Bird Hotel is the pethouse for bird, provide various service and safe place for bird accommodation</p>
                <p>With the well-trainer staff have experience in take care of various types of bird, we ensure that we will bring the best place and service for your bird</p>
            </div>
            <div class="about_detail_button">
                <button>Details</button>
            </div>
        </div>





        <!-- Realife Images and feedback from customer -->
        <div class="checkin">
            <!-- with images from customer: sliding images -->
            <div class="checkin_images">
                <div class="checkin_images_each_img">
                    img1, img2, img3, ...
                </div>
                <div class="checkin_images_pagination">
                    page1, page2, page3, ...
                </div>
            </div>

            <!-- feedback and star from customer -->
            <div class="checkin_feedback">
                <div class="checkin_feedback_each">
                    <div class="checkin_feedback_start">
                        4.5
                    </div>
                    <div class="checkin_feedback_content">
                        Very good
                    </div>
                    <div class="checkin_feedback_name">
                    
                    </div>
                </div>

                <div class="checkin_feedback_each">
                    <div class="checkin_feedback_start">
                        5
                    </div>
                    <div class="checkin_feedback_content">
                        The best service
                    </div>
                    <div class="checkin_feedback_name">
                    
                    </div>
                </div>

                <div class="checkin_feedback_each">
                    <div class="checkin_feedback_start">
                        5
                    </div>
                    <div class="checkin_feedback_content">
                        my bird become so HIGH when she come back home 
                    </div>
                    <div class="checkin_feedback_name">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import ServiceList from '../dum_data/ServiceList'
</script>