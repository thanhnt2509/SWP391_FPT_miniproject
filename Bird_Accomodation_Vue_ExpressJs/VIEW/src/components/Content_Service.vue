<template>
    <div class="box_sizing ">
        <h2 class="text_center xxlarge">Welcome to Bird Castle!</h2>
        <p>We are dedicated to providing top-quality care for your feathered friends and understand the importance of
            finding a
            comfortable and safe home for them. Our goal is to offer a comprehensive range of services and amenities to
            ensure
            that your pet bird thrives and lives a happy and healthy life.</p>


        <h2>Our Services</h2>
        <a-divider orientation="left">Bird Food and Supplies</a-divider>
        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird-food.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>We offer a wide range of bird food, supplements, and other supplies to ensure that
                    your pet
                    receives the best possible nutrition. Our knowledgeable staff can help you choose the right food and
                    supplements for
                    your bird's specific needs.</p>
            </div>
        </div>




        <a-divider orientation="left">Bird Boarding</a-divider>
        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird_boarding.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>When you're away, our bird boarding services provide a safe and comfortable environment for
                    your pet.
                    Our facilities are staffed 24/7, and our experienced caretakers will provide your bird with the care and
                    attention
                    they need.</p>
            </div>
        </div>

        <a-divider orientation="left">Bird Grooming</a-divider>
        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird_grooming.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>We offer bird grooming services to keep your pet looking and feeling their best. Our team of
                    experts
                    can help with beak and nail trimming, wing clipping, and feather maintenance.</p>
            </div>
        </div>


        <a-divider orientation="left">Bird Training</a-divider>
        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird_training.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>Our bird training services can help your pet develop important life skills and improve their
                    behavior. We offer basic training, tricks, and socialization to help your bird reach their full
                    potential.
                </p>
            </div>
        </div>


        <a-divider orientation="left">Bird Play Areas</a-divider>
        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird-play-area.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>Our spacious bird play areas provide plenty of room for your pet to fly and play. Our play
                    areas
                    are designed to keep your bird safe and entertained.</p>

            </div>
        </div>

        <a-divider orientation="left">Bird Enrichment Activities</a-divider>

        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird_wallpaper2.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>Our team of experts can create bird enrichment activities to keep your pet
                    entertained
                    and stimulated. Our activities range from bird puzzles and games to training sessions and interactive
                    play.
                </p>
            </div>
        </div>

        <a-divider orientation="left">Bird Photography</a-divider>

        <div class="each_service">
            <div class="each_service_img">
                <img src="../components/images/bird_phototgraphy.jpg" alt="">
            </div>
            <div class="each_service_content">
                <p>Our professional bird photographers can capture beautiful and unique images of your pet.
                    Whether
                    you want to remember a special moment or simply celebrate your bird's beauty, our photographers will
                    create
                    a
                    lasting memory for you to cherish.</p>
            </div>
        </div>

        <p>At Bird Castle, we understand the special bond between pet and owner, and we are dedicated to providing your
            bird with the best care possible. Contact us today to learn more about our services and to find the perfect
            home for
            your feathered friend.</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.box_sizing {
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    font-size: large;
}

.text_center {
    text-align: center;
}

.xxlarge {
    font-size: xx-large;
}

.each_service {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 20px;
}

.each_service_img img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
}

.each_service_content {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    background-color: #f0f0f0;

}</style>