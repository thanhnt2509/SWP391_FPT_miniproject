<template>
  <header id="header">
    <h2 class="logo">Bird Oasis</h2>
    <nav class="navigation">
      <a href="#" class="active">Home</a>
      <a href="#">About</a>
      <a href="#">Service</a>
      <a href="#">Contact</a>
      <a href="#">Post</a>
      <a href="#">Booking</a>
    </nav>
  </header>

  <section class="banner">
    <img src="/images/bird-tree-hotel.jpg" alt="">
    <h2 id="text">Bird Oasis</h2>
    <!-- <h4 id="subtitle">Treat with care</h4> -->
    <h4 id="subtitle">Bird Accommodation System</h4>
  </section>
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
  position: fixed;
  top: 0;
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

.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
}

#text {
  position: absolute;
  font-size: 8em;
  color: #ffffff;
  text-shadow: 10px 10px 30px rgba(0, 0, 0, .2);
}

#subtitle {
  position: absolute;
  font-size: 2em;
  color: #ffffff;
  text-shadow: 10px 10px 30px rgba(0, 0, 0, .2);
  margin-top: 15vh;
}
</style>