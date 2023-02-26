<template>
  <!-- nav bar -->
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <!-- footer -->
  <!-- <Footer /> -->
  
</template>

<script>
import Homepage from './views/Hompage.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Homepage,
    Header,
    Footer
  }
}
</script>