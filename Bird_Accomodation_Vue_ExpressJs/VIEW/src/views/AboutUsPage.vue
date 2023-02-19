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
import Header from '../components/Base/Header.vue'
import Footer from '../components/Base/Footer.vue'
import Body from '../components/Content_Aboutus.vue'
</script>
