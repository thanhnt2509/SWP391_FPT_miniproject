<template>
    <a-layout-footer style="text-align: center" class="box_flex">
        <div>
            <h2>Contact Us</h2>
            <p>Address: 25B Nguyễn Ngọc Vũ - Trung Hòa - Cầu Giấy - Hà Nội</p>
            <p>Phone: 0989289910</p>
            <p>Zalo: 0989289910</p>
            <p>Email: birdcastle@gmail.com</p>
            <a-tag color="#cd201f">
                <template #icon>
                    <youtube-outlined />
                </template>
                Youtube
            </a-tag>
            <a-tag color="#3b5999">
                <template #icon>
                    <facebook-outlined />
                </template>
                Facebook
            </a-tag>
        </div>
        <div>
            <h2>Account</h2>
            <p>Account</p>
            <p>Feedback on bird</p>
            <p>Booking Service</p>

        </div>

    </a-layout-footer>


</template>

<script setup>
import { YoutubeOutlined, FacebookOutlined } from '@ant-design/icons-vue';
</script>
<style scoped>
.box_flex {
    padding-top: 40px;
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    justify-content: space-between;
}
</style>