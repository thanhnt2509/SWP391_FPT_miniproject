<template>
  <h1 class="title has-text-centered">Fresh Content</h1>
  <div class="container content">
    <div class="columns is-multiline">
      <div v-for="post in postItems" :key="`post_` + post?.post_id" class="column each_post">
        <!-- {{ post }} -->
        <div>
          <img class=""
            src="../../public/images/bird-fac2.jpg" />
        </div>
        <label style="text-align: left; width: 100%;" class="title">{{ post?.title }}</label>
        <div class="each_post_content">
          {{ post?.content }}
        </div>
        <div>
          <div class="has-text-centered">
            <button class="button is-primary" @click="isActive = true">Show more</button>
          </div>
          <div>
            <a-modal v-model:visible="isActive" width="1000px" title="Basic Modal">
              <PostDetail />
            </a-modal>
          </div>
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
.each_post{
  padding: 20px;
  margin-top: 20px;
  background-color: rgb(230, 230, 230);
  margin-right: 10px;
  margin-bottom: 50px;
  border: 0.3px solid rgb(202, 200, 200);
  border-radius: 20px;
}
.each_post_content {
  text-align: left;
  padding: 20px;
  width: 100%;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-justify: kashida;
}
</style>
