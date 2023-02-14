<template>
    <a-layout>
        <Header />
        <a-layout>
            <Menu />
            <Body />
        </a-layout>
        <Footer />
    </a-layout>

</template>


<script setup>
import Header from '../components/Header.vue'
import Body from '../components/Content_Account.vue'
import Menu from '../components/Menu_Account.vue'
import Footer from '../components/Footer.vue'
</script>