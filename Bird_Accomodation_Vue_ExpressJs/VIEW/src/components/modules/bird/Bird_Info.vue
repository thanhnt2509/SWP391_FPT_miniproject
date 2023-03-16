<template>
    <!-- eachbird -->
    <div class="container" :class="{ 'main': main }">
        <!-- bird header -->
        <div>
            <div class="columns">
                <div class="column is-four-fifths">
                    <h4 class="title">{{ bird?.bird_name || '' }}</h4>
                </div>
                <div class="column">
                    <i v-if="!noAction" class="fa-solid fa-pen"></i>
                    <i style="padding-left: 10px;" v-if="!noAction" class="fa-regular fa-trash-can"></i>
                </div>
            </div>

        </div>

        <!-- bird image -->
        <div>
            <img class="bird_img" :src="`http://localhost:5000/file/get_bird_img/${bird?.image}`" alt="bird image goes here"
                style="max-width: 60%%;">
        </div>

        <!-- bird property -->
        <div>
            <table class="table" style="background-color: rgba(255, 255, 255, 0.2);">
                <tr>
                    <td>Species
                        <!-- <select>
                        <option v-for="type in birdTypeItems">{{ type.name }}</option>
                    </select> -->
                    </td>
                    <td>{{ bird?.type_name || '' }}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{{ ageType[bird?.age - 1] || '' }}</td>
                </tr>
                <tr>
                    <td>Breed</td>
                    <td>{{ bird?.breed || '' }}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{{ bird?.gender === 1 ? 'Male' : 'Female' || '' }}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{{ bird?.description || '' }}</td>
                </tr>
                <tr>
                    <td>Boarding</td>
                    <td>
                        <a-tag style="padding: 5px 20px; border-radius: 20px;" v-if="bird?.is_boarding" color="blue">Boarding</a-tag>
                        <a-tag style="padding: 5px 20px; border-radius: 20px;" v-else color="red">Not Boarding</a-tag>
                    </td>
                </tr>
            </table>
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
        // ...mapGetters(['getBirds', 'birdTypeItems'])
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
    border: 0.4px solid #b9b8b8;
    background-color: #F2ECFF;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
}

.bird_img {
    width: 288px;
    height: 288px;
    object-fit: fill;
    border-radius: 20px;
}
</style>