<template>
    <form @submit="submitForm">
        <h1>Register new bird</h1>
        <div>
            <label>Name</label>
            <input required v-model="fields.bird_name" type="tel" placeholder="Typhoon">
        </div>

        <div>
            <label>Species</label>
            <select v-model="fields.type_id">
                <!-- list of bird_type -->
                <option disabled>Select bird type</option>
                <option v-for="type in birdTypeItems" :value="type.btype_id">{{ type.name }}</option>
            </select>
        </div>

        <div>
            <label>Age</label>
            <select required v-model="fields.age">
                <!-- list of bird_age -->
                <option disabled>Select bird age</option>
                <option value="1">Young</option>
                <option value="2">Mature</option>
                <option value="3">Old</option>
            </select>
        </div>

        <div>
            <label>Gender</label>
            <input required v-model="fields.gender" type="radio" name="gender" value="Male">Male
            <input required v-model="fields.gender" type="radio" name="gender" value="Female">Female

        </div>

        <div>
            <label>Breed</label>
            <input v-model="fields.breed" type="text" placeholder="peace face, blue tail">
        </div>

        <div>
            <label>Description</label>
            <textarea v-model="fields.description" placeholder="Describe your bird"></textarea>
        </div>

        <div>
            <button type="submit">Submit</button> {{ fields }}
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
                type_id: '',
                age: '',
                gender: 'Male',
                breed: '',
                description: '',
                image: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getUser', 'birdTypeItems'])
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