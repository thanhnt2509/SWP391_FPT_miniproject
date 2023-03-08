<template>
    <div class="main column">
        <h2 class="label has-text-centered">Find Your Feathered Friend</h2>
        <table>
            <tr>
                <td>
                    <select v-model="bird_selected" class="input select">
                        <option disabled>Please select your bird to boarding</option>
                        <!-- <option value="">NULL data to test</option> -->
                        <option v-for="bird in getBirds" :value="bird">{{ bird.bird_name }}</option>
                    </select>
                </td>
            </tr>
        </table>
        <!-- when selected -->
        <!-- bird_selected: {{ bird_selected }} -->
        <div v-if="bird_selected">
            <div class="bird_img">
                <div class="bird_img_image">
                    <img src="/images/bird1.jpg" alt="user bird">
                </div>
            </div>
            <div class="bird_info">
                <table>
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
                        <td>Description</td>
                        <td>{{ bird_selected?.description || '' }}</td>
                    </tr>
                    Bird selected: {{ bird_selected.bird_id }}
                </table>
            </div>
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
                this.$store.dispatch('setBirdSelected', this.bird_selected.bird_id)
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
            if(age >= 1 && age < 3) res = 'Young'
            else if(age >= 3 && age <= 4) res = 'Adult'
            else if(age >= 5 ) res = 'Old'
            return res
        }
    },
    components: {

    }
}
</script>

<style scoped>
.bird_img {
    width: 100%;
    height: 230px;
    text-align: center;
}

.bird_img_image img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    display: inline-block;
}

.main {
    padding: 10px 40px 30px 0;
}
</style>