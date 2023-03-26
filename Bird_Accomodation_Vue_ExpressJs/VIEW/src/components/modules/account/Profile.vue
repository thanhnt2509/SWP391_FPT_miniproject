<template>
    <div class="columns" id="wrapper">
        <div class="column is-8" id="wrapper_info">
            <h1>User information</h1>
            <div class="field">
                <h3>Name</h3>
                <input class="input" type="text" v-model="fields.name">
            </div>
            <div class="field">
                <h3>Email</h3>
                <input disabled class="input" type="email" v-model="fields.email">
            </div>
            <div class="field">
                <h3>Phone</h3>
                <input class="input" type="tel" v-model="fields.phone">
            </div>
            <div class="field">
                <h3>Address</h3>
                <input class="input" type="text" v-model="fields.address">
            </div>
        </div>
        <div class="column is-4" id="wrapper_img">
            <img src="http://localhost:5000/file/get_user_img/bird-house-design.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    components: {

    },
    data() {
        return {
            fields: {
                name: this.$store.getters.getUser.name,
                email: this.$store.getters.getUser.email,
                phone: this.$store.getters.getUser.phone,
                address: this.$store.getters.getUser.address
            },
            isEdit: false
        }
    },
    computed: {
        // ...mapGetters(['getUser'])
    },
    methods: {
        edit() {
            this.isEdit = !this.isEdit
        },
        submitForm() {
            console.log('submit')
        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Popins', sans-serif;
}

#wrapper{
    width: 80%;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid #B8957B;
    border-radius: 10px;
}

#wrapper h1{
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

#wrapper_info h3{
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

#wrapper_info input{
    padding: 20px;
}

#wrapper_img img{
    width: 100%;
    height: 100%;
    padding: 10% 0 0 10%;
}
</style>