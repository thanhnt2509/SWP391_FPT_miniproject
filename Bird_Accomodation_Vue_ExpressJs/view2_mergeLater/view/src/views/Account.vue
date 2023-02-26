<template>
    <div>
        <h1>Account</h1>
        <!-- nav bar for account CUSTOMER-->
        <nav>
            <li><router-link to="/account/profile">Profile</router-link></li>
            <li><router-link to="/account/bird/list">Bird List</router-link></li>
            <li><router-link to="/account/bird/check">Bird Check</router-link></li>
            <li v-if="getUser"><button @click="logout">Logout</button></li>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Account',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getUser'])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/')
                })
        }
    }
}
</script>