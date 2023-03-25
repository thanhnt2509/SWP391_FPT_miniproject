<template>
  <header id="header">
    <h2 class="logo">Bird Oasis</h2>
    <nav class="navigation">
      <router-link to="/" class="active">Home</router-link>
      <!-- <a href="#">Contact</a> -->
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser" to="/about">About</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser" to="/service">Service</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser"  to="/post">Post</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser"  to="/booking">Booking</router-link>
      <router-link v-if="!$store.getters.getUser" to="/login">Login</router-link>
      <router-link v-if="!$store.getters.getUser" to="/register">Register</router-link>


      <router-link v-if="$store.getters.getUser?.role === 0" to="/account/profile">Profile</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0" to="/account/transaction">Transaction</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0" to="/account/bird/list">Bird List</router-link>

      <router-link v-if="$store.getters.getUser?.role === 1" to="/manager">Manager page</router-link>




      <a href="#" v-if="$store.getters.getUser" @click="logoutClick">Logout</a>
    </nav>
  </header>

  
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const header = document.getElementById("header");
      if (scrollY > 100) {
        header.style.backgroundColor = `rgba(255, 255, 255, 1)`;
      } else {
        header.style.backgroundColor = "transparent";
      }
    },
    logoutClick(){
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #f1f1f1;
  min-height: 100vh;
  overflow-x: hidden;
}

header {
  position: relative;
  left: 0;
  width: 100%;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 2em;
  font-weight: 800;
  color: #9b6c48;
  pointer-events: none;
  margin-right: 270px;
  background-color: rgba(239, 238, 252, .2);
  padding: 6px 15px;
  border-radius: 20px;
}

.navigation a {
  text-decoration: none;
  color: #B8957B;
  padding: 6px 15px;
  border-radius: 20px;
  margin: 0 10px;
  font-weight: 600;
}

.navigation a:hover,
.navigation a.active {
  background: #B8957B;
  color: #fff;
}


</style>