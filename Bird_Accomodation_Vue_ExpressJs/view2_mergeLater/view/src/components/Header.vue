<template>
  <div>
    <header>
      <nav>
        <li><router-link to="/">Logo - Bird Oasis</router-link></li>
        <li><router-link to="/service">Service</router-link></li>
        <li><router-link to="/facilities">Facilities</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- <li><router-link to="/login">Login</router-link></li> -->
        <li ><a href="#" name="booking" @click="patchLogin">Booking</a></li>
        <li ><a href="#" name="account" @click="patchLogin">Account</a></li>
        <li v-if="getUser?.role === 1"><a href="#" name="manager" @click="patchLogin">Manager</a></li>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    patchLogin(evt){
      if(this.getUser) this.$router.push('/' + evt.target.name)
      else this.$router.push('/login')
    }
  },
  created() {
    // call api to sync data
    this.$store.dispatch('getServiceItem')
    this.$store.dispatch('getReviewItem')
    this.$store.dispatch('getBirdTypeItem')
  }
}
</script>