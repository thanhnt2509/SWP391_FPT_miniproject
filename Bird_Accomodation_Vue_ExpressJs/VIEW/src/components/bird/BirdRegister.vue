<template>
    <form @submit="submitForm" class="container main">
        <h1>Register new bird</h1>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input is-success" required v-model="fields.bird_name" type="tel" placeholder="Typhoon">
            </div>
        </div>

        <div class="field">
            <label lass="label">Species</label>
            <select class="input select" v-model="fields.type_id">
                <!-- list of bird_type -->
                <option disabled>Select bird type</option>
                <option v-for="type in birdTypeItems" :value="type.btype_id">{{ type.name }}</option>
            </select>
        </div>

        <div class="field">
            <label class="label">Age</label>
            <select class="input select" required v-model="fields.age">
                <!-- list of bird_age -->
                <option disabled>Select bird age</option>
                <option value="1">Young</option>
                <option value="2">Mature</option>
                <option value="3">Old</option>
            </select>
        </div>

        <div class="field">
            <label class="label">Gender</label>
            <div class="control">
                <input class="radio" required v-model="fields.gender" type="radio" name="gender" value="Male">Male
                <input class="radio" required v-model="fields.gender" type="radio" name="gender" value="Female">Female
            </div>

        </div>

        <div class="field">
            <label class="label">Breed</label>
            <input class="input" v-model="fields.breed" type="text" placeholder="peace face, blue tail">
        </div>

        <div class="field">
            <label class="label">Description</label>
            <textarea class="textarea" v-model="fields.description" placeholder="Describe your bird"></textarea>
        </div>

        <div>
            <button class="button is-primary" type="submit">Submit</button>
        </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Birdregister',
    data() {
        return {
            fields: {
                bird_name: '',
                type_id: '2',
                age: '2',
                gender: 'Male',
                breed: '',
                description: '',
                image: ''
            }
        }
    },
    computed: {
        ...mapGetters(['birdTypeItems'])
    },
    methods: {
        submitForm(evt) {
            evt.preventDefault();
            this.$store.dispatch('addNewBird', this.fields)
                .catch((e) => {
                    console.log(e);
                }, 1000)
            console.log(this.fields);
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #f5f5f5;
    border-radius: 10px;
    width: fit-content;
    padding: 40px;
}
</style>