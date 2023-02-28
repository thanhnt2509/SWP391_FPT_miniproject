<template>
    <div class="container content main">
        <h1 class="has-text-centered title">Profile</h1>
        <p class="subtitle">Your information will show here, change it if you need to booking service in different address
            !!!</p>
        <button @click="edit" class="button is-link">Edit</button>

        <div class="field">
            <label class="label">Fullname</label>
            <div class="control">
                <input class="input is-success" :disabled="!isEdit" type="text" :value="getUser?.name">
            </div>
        </div>


        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" :disabled="!isEdit" type="email" :value="getUser?.email">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Phone</label>
            <div class="control">
                <input  class="input is-success" :disabled="!isEdit" type="tel" :value="getUser?.phone">
            </div>
        </div>

        <div class="field">
                <label class="label">Address</label>
                <div class="control">
                    <input class="input is-success" :disabled="!isEdit" type="text" :value="getUser?.address">
                </div>
            </div>

        <div>
            <button class="button is-primary" type="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Profile',
    data() {
        return {
            isEdit: false
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    },
    methods: {
        edit() {
            this.isEdit = !this.isEdit
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #f5f5f5;
    padding: 10%;
    border-radius: 40px;
}
</style>