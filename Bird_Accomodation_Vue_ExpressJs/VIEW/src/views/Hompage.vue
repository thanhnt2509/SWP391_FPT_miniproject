<template>
  <div>
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

</style>