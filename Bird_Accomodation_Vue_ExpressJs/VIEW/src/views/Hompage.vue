<template>
  <div>
    <section class="banner">
      <img src="/images/bird-tree-hotel.jpg" alt="">
      <h2 id="text">Bird Oasis</h2>
      <!-- <h4 id="subtitle">Treat with care</h4> -->
      <h4 id="subtitle">Bird Accommodation System</h4>
    </section>
    
    <Homepage_Intro />

    <Homepage_Highlight />

    <!-- test post page added -->
    <!-- <PostPage /> -->

    <Homepage_ReviewList />
  </div>
</template>

<script>
import Homepage_ReviewList from "./Homepage_ReviewList.vue";
import Homepage_Intro from "./Homepage_Intro.vue";
import Homepage_Highlight from "./Homepage_Highlight.vue";
import PostPage from "./PostPage.vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
export default {
  name: "Homepage",
  data() {
    return {
    };
  },
  computed: {

  },
  methods: {

  },
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
    PostPage,
    Homepage_ReviewList,
    Homepage_Intro,
    Homepage_Highlight
  },
};
</script>

<style scoped>
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