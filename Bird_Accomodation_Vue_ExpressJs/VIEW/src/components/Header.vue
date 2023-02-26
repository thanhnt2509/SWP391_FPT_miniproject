<template>
  <div>
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/service">Service</router-link>
            <router-link class="navbar-item" to="/facilities">Facilities</router-link>
            <router-link class="navbar-item" to="/about">About</router-link>
            <a href="#" class="navbar-item" name="booking" @click="patchLogin">Booking</a>
            <!-- <a href="#" class="navbar-item" name="account" @click="patchLogin">Account</a> -->
            <a v-if="getUser?.role === 1"  class="navbar-item" href="#" name="manager" @click="patchLogin">Manager</a>
            <div v-if="getUser" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/account/profile">Profile</router-link>
                <router-link class="navbar-item" to="/account/bird/list">Bird List</router-link>
                <router-link class="navbar-item" to="/account/bird/check">Bird Check</router-link>
                <hr class="navbar-divider">
                <!-- <a class="navbar-item">
                  Report an issue
                </a> -->
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <router-link to="/register">Sign up</router-link>
              </a>
              <a class="button is-light">
                <router-link to="/login">Log in</router-link>
              </a>
            </div>
          </div>
        </div>
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
    patchLogin(evt) {
      if (this.getUser) this.$router.push('/' + evt.target.name)
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