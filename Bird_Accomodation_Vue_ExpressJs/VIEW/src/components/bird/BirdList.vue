<template>
    <!-- page introduction -->
    <div>
        <div>
            <h1>Bird List</h1>
            <p>ALl your bird registered will show here !</p>
        </div>
    </div>
    <!-- birdlist -->
    <div v-for="bird in getBirds">
        <!-- eachbird -->
        <Bird_Info :bird="bird"/>
    </div>
    <!-- register new bird -->
    <BirdRegister />
</template>

<script>
import BirdRegister from './BirdRegister.vue'
import Bird_Info from './Bird_Info.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'BirdList',
    computed: {
        ...mapGetters(['getUser', 'getBirds'])
    },
    components: {
        BirdRegister,
        Bird_Info
    }
}
</script>