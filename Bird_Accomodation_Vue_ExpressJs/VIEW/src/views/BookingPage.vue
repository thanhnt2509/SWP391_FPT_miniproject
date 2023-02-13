<template>
    <a-layout>
        <Header/>
        <a-layout>
            <!-- <a-layout-sider>Sider</a-layout-sider> -->
            <Body />
        </a-layout>
        <Footer />
    </a-layout>
    
</template>


<script setup>
import Header from '../components/Header.vue'
import Body from '../components/Content_Booking.vue'
import Footer from '../components/Footer.vue'
</script>