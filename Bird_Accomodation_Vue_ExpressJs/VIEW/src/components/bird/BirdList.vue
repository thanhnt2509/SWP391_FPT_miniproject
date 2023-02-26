<template>
    <!-- page introduction -->
    <div>
        <div>
            <h1>Bird List</h1>
            <p>ALl your bird registered will show here !</p>
        </div>
    </div>
    <!-- birdlist -->
    <div>
        <!-- eachbird -->
        <Bird_Info />
        <Bird_Info />
        <Bird_Info />
        <Bird_Info />
    </div>
    <!-- register new bird -->
    <BirdRegister />
</template>

<script>
import BirdRegister from './BirdRegister.vue'
import Bird_Info from './Bird_Info.vue'
export default {
    name: 'BirdList',
    components: {
        BirdRegister,
        Bird_Info
    }
}
</script>