<template>
    <a-layout>
        <Header/>
        <a-layout>
            <Body />
        </a-layout>
        <Footer />
    </a-layout>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Body from '../components/Content_Aboutus.vue'
</script>
