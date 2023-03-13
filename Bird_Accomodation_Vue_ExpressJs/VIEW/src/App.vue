<template>
  <!-- nav bar -->
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <!-- footer -->
  <Footer />
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
  created() {
    // localStorage.setItem('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlUyQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg0MjE2MywiZXhwIjoxNjc3ODQ1NzYzfQ.JA5WroIVas2nKcHau__jSa5G4kjICpxQQhGDJrb0asU')
    // call api to sync data
    // this.$store.dispatch("getReviewItem");
    this.$store.dispatch("getServiceItem");
    this.$store.dispatch("getBirdTypeItem");
    this.$store.dispatch("getPostItem");
  },
  components: {
    Homepage,
    Header,
    Footer,
  }
}
</script>

<style >
*{
  font-size: large;
}  
</style>