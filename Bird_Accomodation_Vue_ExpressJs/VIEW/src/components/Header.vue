<template>
  <header :class="{'header_fixed': $route.path === '/', 'header': $route.path != '/'}">
    <h2 class="logo">Bird Oasis</h2>
    <nav class="navigation">
      <router-link to="/" class="active">Home</router-link>
      <!-- <a href="#">Contact</a> -->
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser" to="/about">About</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser" to="/service">Service</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser" to="/post">Post</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0 || !$store.getters.getUser" to="/booking" class="special">Booking</router-link>
      <router-link v-if="!$store.getters.getUser" to="/login">Login</router-link>
      <router-link v-if="!$store.getters.getUser" to="/register">Register</router-link>


      <router-link v-if="$store.getters.getUser?.role === 0" to="/account/profile">Profile</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0" to="/account/transaction">Transaction</router-link>
      <router-link v-if="$store.getters.getUser?.role === 0" to="/account/bird/list">Bird List</router-link>

      <router-link v-if="$store.getters.getUser?.role === 1" to="/manager">Manager page</router-link>




      <a href="#" v-if="$store.getters.getUser" @click="logoutClick">Logout</a>
    </nav>
    
    <div v-if="$store.getters.getUser" id="user">
      <img :src="`http://localhost:5000/file/get_user_img/${$store.getters.getUser?.user_img}`" alt="">
      <h2>{{ $store.getters.getUser?.name }}</h2>
    </div>
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
      const header = document.getElementsByClassName('header_fixed')[0];
      if(!header || !header.style) return;
      if (scrollY > 100) {
        header.style.backgroundColor = `rgba(255, 255, 255, 1)`;
      } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 1)";
      }
    },
    logoutClick() {
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

.header {
  position: relative;
  left: 0;
  width: 100%;
  padding: 10px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  background-color: rgba(255, 255, 255, 1);
}

.header_fixed {
  position: fixed;
  left: 0;
  width: 100%;
  padding: 10px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  background-color: rgba(255, 255, 255, 1);
}

.logo {
  font-size: 2em;
  font-weight: 800;
  color: #9b6c48;
  pointer-events: none;
  margin-right: 150px;
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

.navigation a.special {
  border: 1px solid #B8957B;
  color: #B8957B;
}

.navigation a.special:hover {
  background-color: #B8957B;
  color: #fff;
}

#user{
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#user img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: fill;
  border: 1px solid #B8957B;
}

</style>