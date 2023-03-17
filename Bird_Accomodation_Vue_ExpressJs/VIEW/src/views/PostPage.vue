<template>
  <h1 class="title has-text-centered">Fresh Content</h1>
  <div class="container content">
    <div class="columns is-multiline">
      <!-- {{ postItems }} -->
      <div v-for="post in postItems" :key="`post_` + post?.post_id" class="column each_post">
        <div>
          <img class="" src="../../public/images/bird-fac2.jpg" />
        </div>
        <h2 class="title">{{ post?.title }}</h2>
        <div>
          <button class="button is-info is-light" @click="isActive = true">Show more</button>
          <a-modal v-model:visible="isActive" width="1000px" :title="post?.title">
            <PostDetail :post="post"/>
          </a-modal>
        </div>
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
    };
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
  height: 390px;
  margin: 10px;
  padding: 0;
  border: 0.2px solid #ccc;
}

.each_post h2 {
  padding-top: 8px;
  margin: 0;
  color: #000;
  text-align: center;
}
.each_post button{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
}
</style>
