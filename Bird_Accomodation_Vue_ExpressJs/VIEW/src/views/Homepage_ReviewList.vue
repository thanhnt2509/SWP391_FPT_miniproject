<template>
    <!-- reviews: {{ reviews }} -->
    <!-- feedback from user -->
    <section id="wrapper">
        <h2>Testimonials from Bird Owners</h2>
        <div id="wrapper_box">
            <div v-for="review in reviews" class="each_content">
                <img class="each_content_img" :src="`http://localhost:5000/file/get_checkout_img/${review.checkout_img}`"
                    alt="">
                <h3>{{ review.name }} <a-rate :value="review.rating" allow-half /></h3>
                <p>{{ review.comment }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ServiceList',
    computed: {
        reviews() {
            return this.$store.getters.reviewItems;
        }
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#wrapper {
    position: relative;
    width: 80%;
    margin: 40px auto 0px auto;
}

#wrapper h2 {
    font-weight: 600;
    font-size: 2.25rem;
    padding: 20px;
}

#wrapper_box{
    display: flex;
    align-items: center;

}
.each_content_img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin: 20px 0px;
}
</style>