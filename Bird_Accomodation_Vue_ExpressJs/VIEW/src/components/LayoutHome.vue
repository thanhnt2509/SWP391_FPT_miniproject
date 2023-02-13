<template>
    <div class="body_home">
        <!-- SLOGAN - BRIEF ABOUT -->
        <div class="slogan text_center">
            <div class="slogan_content">
                <h5>Creating a warm and welcoming environment for birds of all types</h5>
                <h1 class="slogan_header">Treat with care</h1>
                <p>The place where you found the Oasis for bird !!!</p>
            </div>
            <div class="slogan_empty">
            
            </div>
        </div>


        <!-- SERVICE -->
        <div class="service" v-for="{name, description, service_id} in ServiceList.serviceList" :key="service_id">
            <div class="each_service">
                <div class="service_header">
                    <h3>{{ name }}</h3>
                </div>
                <div class="service_content">
                    <p>{{ description }}</p>
                </div>
            </div>

        </div>

    
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
            <div class="checkin_header"> <h2>IMAGES FROM CUSTOMER</h2> </div>
            <div class="checkin_images">
                <div class="checkin_images_each_img">
                    img1, img2, img3, ...
                </div>
                <div class="checkin_images_pagination">
                    page1, page2, page3, ...
                </div>
            </div>

            <!-- feedback and star from customer -->
            <div class="checkin_header"> <h2>REVIEW</h2>  </div>
            <div class="checkin_feedback" v-for="{review_id, rating, comment, user_name} in ReviewList.reviewList" :key="review_id">
                <div class="checkin_feedback_each">
                    <div class="checkin_feedback_start">
                        Rating point: {{rating}}
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
</template>

<script setup>
import {ref} from 'vue'
import ServiceList from '../dum_data/Service'
import ReviewList from '../dum_data/Review'
</script>

<style scoped>
.body_home{
    
}
.slogan{
    height: 400px;


}
.slogan_content{
    font-size: larger;
    height: 40%;
    width: 60%;
}
.slogan_content *{
    margin: auto;
    
} 
.slogan_empty{
    height: 60%;
    background-color: rgb(230, 230, 230);
}
.text_center{
    text-align: center;
}
.slogan_header{
    font-weight: bolder;
    font-size: xx-large;
}
.service{

}
.each_service{

}
.service_header{

}
.service_content{

}
.about{

}
.about_header{

}
.about_content{

}
.about_detail_button{

}
.checkin{

}
.checkin_header{

}
.checkin_images{

}
.checkin_images_each_img{

}
.checkin_images_pagination{

}
.checkin_feedback{

}
.checkin_feedback_each{

}
.checkin_feedback_start{

}
.checkin_feedback_content{

}
.checkin_feedback_name{

}
</style>