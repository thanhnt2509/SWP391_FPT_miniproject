<template>
    <div class="columns wrapper">
        <!-- reviews: {{ reviews }} -->
        <div v-for="review in reviews" class="column wrapper_box">
            <img :src="`http://localhost:5000/file/get_checkout_img/${review.checkout_img}`" alt="">
            <div class="wrapper_box_rating">
                <h3>{{ review.name }}</h3>
                <p><a-rate :value="review.rating" allow-half /></p>
            </div>
            <div class="wrapper_box_comment">
                <p>{{ review.comment }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ServiceList',
    props: {
        reviews: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped>
.wrapper {
    border-collapse: collapse;
}

.wrapper_box {
    padding: 0;
    width: 100%;
    border: 0.2px solid rgb(148, 147, 147);
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
}

.wrapper_box img {
    width: 100%;
    height: 450px;
    border-top-left-radius: 40px;
    /* border-bottom-right-radius: 40px; */
    object-fit: cover;
}

.wrapper_box_comment{
    padding: 0;
    margin: 0;
}
</style>