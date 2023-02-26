<template>
    <div>
        <h1>Profile</h1>
        <p>Your information will show here, change it if you need to booking service in different address !!!</p>
        <button>Edit</button>

        <div>
            <label>Fullname</label>
            <input disabled type="text" :value="getUser.name">
        </div>

        <div>
            <label>Email</label>
            <input disabled type="email" :value="getUser.email">
        </div>

        <div>
            <label>Phone</label>
            <input disabled type="tel" :value="getUser.phone">
        </div>

        <div>
            <label>Address</label>
            <input disabled type="text" :value="getUser.address">
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Profile',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['getUser'])
    }
}
</script>