<template>
    <!-- eachbird -->
    <div class="container main">
        <!-- bird header -->
        <div>
            <h4>Name: {{ bird?.bird_name || '' }}</h4>
            <div v-if="!noAction">
                <button class="button is-link">Edit</button>
                <button class="button is-danger">Delete</button>
            </div>

        </div>

        <!-- bird image -->
        <div>
            <img :src="bird?.image || ''" alt="bird image goes here">
        </div>

        <!-- bird property -->
        <div>
            <ul>
                <li>Species: {{ birdTypeItems[bird?.type_id -1]?.name || ''}}</li>
                <li>Age: {{ ageType[bird?.age -1]  || ''}}</li>
                <li>Breed: {{ bird?.breed || '' }}</li>
                <li>Gender: {{ bird?.gender || ''}}</li>
                <li>Description: {{ bird?.description || ''}}</li>
                <!-- <li>Status: <button disabled>On-service</button></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Bird_Info',
    data() {
        return {
            ageType: [
                'Baby',
                'Young',
                'Mature',
            ]
        }
    },
    computed: {
        ...mapGetters(['getBirds', 'birdTypeItems'])
    },
    props: {
        bird: {
            type: Object,
            // required: true
        },
        noAction: Boolean
    },
}
</script>
<style scoped>
.main{
    /* border-radius: 20px; */
    padding: 10px;
    margin: 10px;
}
</style>