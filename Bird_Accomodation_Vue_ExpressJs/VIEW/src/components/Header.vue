<template>
  <div>
    <header>
      <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="/images/bird-oasis.png" width="130" height="28" />
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start" v-if="getUser?.role === 0 || getUser === undefined">
            <router-link class="navbar-item" to="/service">Service</router-link>
            <router-link class="navbar-item" to="/facilities">Facilities</router-link>
            <!-- <router-link class="navbar-item" to="/about">About</router-link> -->
            <router-link class="navbar-item" to="/post">Article</router-link>
            <router-link class="navbar-item" to="/birdPriceList">Booking Info</router-link>
            <router-link class="navbar-item" to="/booking">Booking</router-link>

            <div v-if="getUser" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <i class="fa-solid fa-bars"></i>
              </a>

              <div class="navbar-dropdown">
                <div>
                  <router-link class="navbar-item" to="/account/profile">Profile</router-link>
                  <router-link class="navbar-item" to="/account/transaction">Transaction</router-link>
                  <router-link class="navbar-item" to="/account/bird/list">Bird List</router-link>
                </div>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  <a href="#" @click="logout">Logout</a>
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-start" v-if="getUser?.role === 1">
            <router-link class="navbar-item" to="/manager">Manager page</router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <i class="fa-solid fa-bars"></i>
              </a>
              <div class="navbar-dropdown">
                <!-- <hr class="navbar-divider" /> -->
                <a class="navbar-item">
                  <a href="#" @click="logout">Logout</a>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div v-if="!getUser" class="buttons">
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
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
