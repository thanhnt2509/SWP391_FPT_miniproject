<template>
    <!-- banner and image -->
    <section id="image_banner" class="hero is-large is-link">
        <div class="hero-body">
            <p class="title" style="padding-left: 55px;">
                TREAT WITH CARE
            </p>
            <p class="subtitle">
                The place where you found the bird oasis !
            </p>
            <button @click="$router.push('/login')" class="button is-primary is-light has-text-centered" style="width: 375px;">Book now</button>
        </div>
    </section>

    <div class="container has-text-centered">
        <!-- Selft introduction -->
        <div class="content is-normal">
            <div>
                <div class="columns">
                    <div class="column is-four-fifths"><h1 class="title" style="padding-left: 200px;">Bird Oasis</h1></div>
                    <div class="column"><button class="button is-primary" @click="$router.push('/about')">More Information</button></div>
                </div>
                
                <p>Bird Oais is the pethouse for bird, provide various service and safe place for bird accommodation
                    With the well-trainer staff have experience in take care of various types of bird, we ensure that we
                    will
                    bring the best place and service for your bird</p>
                
            </div>
        </div>

        <!-- Gallery -->
        <div>
            <div>
                <div class="columns">
                    <div class="column is-four-fifths"><h1 class="title" style="padding-left: 200px;">Services</h1></div>
                    <div class="column"><button class="button is-light" @click="$router.push('/service')">Detail Serivice</button>    </div>
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

export default {
    name: 'Homepage',
    computed: {
        ...mapGetters(['serviceItems', 'reviewItems'])
    }
}
</script>

<style scoped>
.img_service {
    width: 300px;
    height: 300px;
}

*{
    padding-top: 10px;
}

#image_banner {
    background-image: url('/public/images/Bird-wallpaper2.jpg');
    background-size: cover;
    background-position: top;
}
</style>