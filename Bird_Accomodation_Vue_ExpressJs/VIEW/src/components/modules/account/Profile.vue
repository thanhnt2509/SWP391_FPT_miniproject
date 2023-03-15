<template>
    <div class="wrapper container columns">
        <div class="wrapper-info column is-8">
            <h1 class="title">User information</h1>
            <div class="field">
                <label class="label">Name</label>
                <input class="input" type="text" v-model="fields.name">
            </div>
            <div class="field">
                <label class="label">Email</label>
                <input disabled class="input" type="email" v-model="fields.email">
            </div>
            <div class="field">
                <label class="label">Phone</label>
                <input class="input" type="tel" v-model="fields.phone">
            </div>
            <div class="field">
                <label class="label">Address</label>
                <input class="input" type="text" v-model="fields.address">
            </div>
        </div>
        <div class="wrapper-avatar column is-4 ">
            <div class="wrapper-avatar-img">
                <img src="http://localhost:5000/file/get_user_img/bird-house-design.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
.wrapper {
    width: 100%;
    height: fit-content;
    margin: 3% 13% 3% 17%;
    /* background-color: rgb(223, 221, 221); */
    border: 0.4px solid #aaaaaa;
    border-radius: 20px;
    overflow: hidden;
}

.wrapper-info {
    background-color: #fff;
    /* border-radius: 20px; */
    padding: 20px;
}

.wrapper-avatar{

}

.wrapper-avatar-img{
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper-avatar-img img{
    width: 100%;
    height: 100%;
    object-fit: inherit;
    border-radius: 20px;
}
</style>