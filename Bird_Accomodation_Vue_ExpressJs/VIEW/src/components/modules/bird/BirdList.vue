<template>
    <!-- page introduction -->
    <div id="wrapper">
        <h1>Bird List</h1>
        <p>ALl your bird registered will show here !</p>
        <!-- getBirds : {{ getBirds }} -->
        <div class="columns">
            <div class="column is-four-fifths columns is-multiline">
                <div class="column is-4" v-for="bird in getBirds">
                    <Bird_Info :bird="bird" />
                </div>
            </div>
            <div class="column">
                <BirdRegister />
            </div>
        </div>


    </div>
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
    },
    updated() {
        this.$store.dispatch('getAllBirds')
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#wrapper {
    width: 80%;
    background: #fffefe;
    margin: 0 auto;
}

#wrapper h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #000;
    text-align: center;
}

#wrapper p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin: 0 0 2rem 0;
}
</style>