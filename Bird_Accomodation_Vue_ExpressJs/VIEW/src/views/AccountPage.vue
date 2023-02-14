<template>
    <a-layout>
        <Header />
        <a-layout>
            <Menu @ListBird="nav = 1" @Registration="nav = 2" @CheckingBird="nav = 3" />
            <Body v-if="nav == 1" />
            <Header v-else-if="nav == 2" />
        </a-layout>
        <Footer />
    </a-layout>

</template>


<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Body from '../components/Content_Bird.vue'
import Menu from '../components/Menu_Account.vue'
import Footer from '../components/Footer.vue'

const nav = ref(['1'])
</script>