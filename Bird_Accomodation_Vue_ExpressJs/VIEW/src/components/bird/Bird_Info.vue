<template>
    <!-- eachbird -->
    <div class="container" :class="{'main': main}">
        <!-- bird header -->
        <div>
            <div class="columns">
                <div class="column">
                    <h4 class="title">{{ bird?.bird_name || '' }}</h4>
                </div>
                <button class="column button is-success" v-if="!noAction" @click="editBird">Edit</button>
                <button class="column button is-danger" v-if="!noAction" style="border-top-right-radius: 20px;">Delete</button>
            </div>



        </div>

        <!-- bird image -->
        <div>
            <img :src="'https://img.freepik.com/free-vector/hand-drawn-bird-collection_52683-42321.jpg?w=740&t=st=1677462200~exp=1677462800~hmac=cc48a9a93694934a8fb88d88823eca7fbd6283e0b412646f3cfcc397895d877f'"
                alt="bird image goes here" style="max-width: 60%%;">
        </div>

        <!-- bird property -->
        <div>
            <ul>
                <li>Species: {{ birdTypeItems[bird?.type_id - 1]?.name || '' }}
                    <!-- <select>
                        <option v-for="type in birdTypeItems">{{ type.name }}</option>
                    </select> -->
                </li>
                <li>Age: {{ ageType[bird?.age - 1] || '' }}</li>
                <li>Breed: {{ bird?.breed || '' }}</li>
                <li>Gender: {{ bird?.gender || '' }}</li>
                <li>Description: {{ bird?.description || '' }}</li>
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
        noAction: String,
        resize_width: String,
        main: Boolean
    },
}
</script>
<style scoped>
.main {
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
}
img{
    /* max-width: 290.7px; */
}
</style>