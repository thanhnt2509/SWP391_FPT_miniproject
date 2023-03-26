<template>
    <div class="column" id="wrapper_birdSelect">
        <h2>Find Your Feathered Friend</h2>
        <select v-model="bird_selected" class="input">
            <option disabled>Please select your bird to boarding</option>
            <!-- <option value="">NULL data to test</option> -->
            <option :disabled="bird.is_boarding" v-for="bird in getBirds" :value="bird">
                <p v-if="bird.is_boarding">{{ bird.bird_name }} - Boarding</p>
                <p v-else>{{ bird.bird_name }}</p>
            </option>
        </select>
        <!-- when selected -->
        <!-- bird_selected: {{ bird_selected }} -->
        <div v-if="bird_selected" id="wrapper_birdSelect_info">
            <div id="wrapper_birdSelect_info_img">
                <img :src="`http://localhost:5000/file/get_bird_img/${bird_selected.image}`" alt="user bird">
            </div>
            <table class="table is-fullwidth">
                <tr>
                    <td>Species</td>
                    <td>{{ bird_selected.type_name }}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{{ ageConvert(bird_selected.age) }}</td>
                </tr>
                <tr>
                    <td>Breed</td>
                    <td>{{ bird_selected?.breed || '' }}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{{ bird_selected?.gender === 1 ? 'Male' : 'Female' || '' }}</td>
                </tr>
                <tr>
                    <td style="border: unset;">Description</td>
                    <td style="border: unset;">{{ bird_selected?.description || '' }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookingBirdSelect',
    data() {
        return {
            bird_selected: undefined,
        }
    },
    watch: {
        bird_selected: {
            handler: function (val, oldVal) {
                this.$store.dispatch('setBirdSelected', this.bird_selected?.bird_id)
            },
            deep: true
        }
    },
    computed: {
        ...mapGetters(['getBirds']),

    },
    methods: {
        ageConvert(age) {
            let res = 'Young'
            if (age >= 1 && age < 3) res = 'Young'
            else if (age >= 3 && age <= 4) res = 'Adult'
            else if (age >= 5) res = 'Old'
            return res
        }
    },

}
</script>

<style scoped>
#wrapper_birdSelect {
    width: 100%;
    height: 100%;
    margin: 0 40px;
    border-radius: 5px;
    background-color: #fff;
}

#wrapper_birdSelect h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

#wrapper_birdSelect_info_img{
    text-align: center;
}

#wrapper_birdSelect_info_img img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 20px 0 0 0;
}
</style>