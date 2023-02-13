<template>
    <a-layout-header class="header">
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
            <div style="width: 85%;">
                <a-menu-item key="0" style="width: fit-content;">
                    LOGO - BirdCastle
                </a-menu-item>
            </div>
            <a-menu-item key="1">HOME</a-menu-item>
            <a-menu-item key="2">SERVICE</a-menu-item>
            <a-menu-item key="3">ABOUT US</a-menu-item>
            <a-menu-item key="4">FACILITIES</a-menu-item>
            <a-menu-item key="5">CONTACT US</a-menu-item>
            <a-menu-item key="6">NEWS</a-menu-item>
            <a-menu-item key="7">FAQ</a-menu-item>
        </a-menu>
    </a-layout-header>
</template>

<script setup>
import { ref } from 'vue'

const selectedKeys = ref(['0'])
</script>

<style scoped>
.header{
    position: sticky;
}
</style>