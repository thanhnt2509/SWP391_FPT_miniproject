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
    // call api to sync data
    // this.$store.dispatch("getServiceItem");
    // this.$store.dispatch("getReviewItem");
    // this.$store.dispatch("getBirdTypeItem");
    // this.$store.dispatch("getPostItem");
  },
  components: {
    Homepage,
    Header,
    Footer
  }
}
</script>