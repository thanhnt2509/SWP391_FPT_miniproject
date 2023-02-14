<template>
    <a-layout-header class="header">
        <div class="logo" />
        <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
            <div style="width: 85%;">
                <a-menu-item style="width: fit-content;">
                    LOGO - BirdCastle
                </a-menu-item>
                
            </div>
            <a-menu-item key="1"><RouterLink to="/">HOME</RouterLink></a-menu-item>
            <a-menu-item key="2"><RouterLink to="/service">SERVICE</RouterLink></a-menu-item>
            <a-menu-item key="3"><RouterLink to="/about">ABOUT US</RouterLink></a-menu-item>
            <a-menu-item key="4">FACILITIES</a-menu-item>
            <!-- <a-menu-item key="5">CONTACT US</a-menu-item> -->
            <a-menu-item key="6">NEWS</a-menu-item>
            <a-menu-item key="7">FAQ</a-menu-item>
            <a-menu-item key="8"><RouterLink to="/account">ACCOUNT</RouterLink></a-menu-item>
        </a-menu>
    </a-layout-header>
</template>

<script setup>
    import { ref } from 'vue'

</script>

<style scoped>
.header{
    position: sticky;
}
</style>