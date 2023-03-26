<template>
  <div id="wrapper_register">
    <form @submit="submitForm" enctype="multipart/form-data">
      <h1>Register new bird</h1>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input is-success" required v-model="fields.bird_name" type="tel" placeholder="Typhoon">
        </div>
      </div>
      <div class="field">
        <label class="label">Upload bird image</label>
        <input name="bird_image" type="file" accept="image/jpeg" @change="evt => fields.image = evt.target.files[0]">
      </div>

      <div class="field">
        <label class="label">Species</label>
        <select class="input select" v-model="fields.bird_type">
          <!-- list of bird_type -->
          <option disabled>Select bird type</option>
          <option v-for="type in birdTypeItems" :value="type.type_id">{{ type.type_name }}</option>
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
          <input class="radio" required v-model="fields.gender" type="radio" name="gender" value="1">Male
          <input class="radio" required v-model="fields.gender" type="radio" name="gender" value="0">Female
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

      <div class="submit_button">
        <button class="button is-primary" type="submit">Add new bird</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { message } from 'ant-design-vue';
import axios from "axios";

export default {
  name: 'Bird-register',
  data() {
    return {
      fields: {
        bird_name: '',
        bird_type: '3',
        age: '2',
        gender: '1',
        breed: '',
        description: '',
        image: undefined,
      }
    }
  },
  components: {},
  computed: {
    ...mapGetters(['birdTypeItems'])
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      // check validation
      if (this.fields.bird_name === '') {
        message.error('Please enter bird name');
      }
      else if (!this.fields.image) {
        message.error('Please upload bird image');
      }
      else {
        try {
          this.fields.user_id = this.$store.getters.getUser.user_id

          // process fields image
          let formData = new FormData();
          formData.append('file', this.fields.image);
          formData.append('user_id', this.fields.user_id);
          formData.append('bird_name', this.fields.bird_name);
          formData.append('bird_type', this.fields.bird_type);
          formData.append('age', this.fields.age);
          formData.append('gender', this.fields.gender)
          formData.append('breed', this.fields.breed)
          formData.append('description', this.fields.description)
          // console.log(this.fields)
          // console.log(formData)
          // this.$store.dispatch('addNewBird', formData)

          axios.post('http://localhost:5000/bird', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then(res => {
              console.log(res)
            })

          this.$store.dispatch('getAllBirds')
          message.success('Bird added successfully');
          this.$router.push('/account/bird/list');
        } catch (error) {
          message.error('Something went wrong');
        }
      }
    },

  }
}
</script>

<style scoped>
#wrapper_register {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

#wrapper_register h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 2rem;
}

#wrapper_register .submit_button {
  text-align: center;
}
</style>