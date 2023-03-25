<template>
  <h1 class="title has-text-centered">Fresh Content</h1>
  <div class="container content" style="margin-bottom: 45px;">
    <div class="columns is-multiline">
      <!-- {{ postItems }} -->
      <a-modal v-model:visible="isActive" width="1000px" :title="post?.title">
        <PostDetail :postSelected="postSelected"/>
      </a-modal>
      <div v-for="post in postItems" :key="`post_` + post?.post_id" class="column each_post">
      <!--  @click="handleShowMore(post)" -->
        <div>
          <img class="" src="../../public/images/bird-fac2.jpg" />
        </div>
        <h2 class="title">{{ post?.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostDetail from "./PostDetail.vue";
export default {
  name: "Post",
  computed: {
    ...mapGetters(["postItems"]),
  },
  data() {
    return {
      isActive: false,
      postSelected: {},
    };
  },
  methods: {
    handleShowMore(post) {
      this.postSelected = post;
      this.isActive = true;
    },
  },
  components: {
    PostDetail,
  },
};
</script>

<style scoped>
.each_post {
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 10px;
  padding: 0;
  border: 0.2px solid #ccc;
}

.each_post:hover{
  border: 2px solid #6f84b1;
}

.each_post h2 {
  padding-top: 8px;
  margin: 0;
  color: #000;
  text-align: center;

}

.each_post h2:hover{
  color: #6f84b1;
}

.each_post button {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
}
</style>
