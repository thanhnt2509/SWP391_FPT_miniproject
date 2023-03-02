<template>
  <div class="container content has-text-centered">
    <div class="title">Post</div>
    <div class="columns">
      <div
        v-for="post in postItems"
        :key="`post_` + post?.post_id"
        class="column_content column is-one-third"
      >
        <div>
          <img
            class="column_content_img"
            src="https://img.freepik.com/free-vector/hand-drawn-bird-collection_52683-42321.jpg?w=740&t=st=1677462200~exp=1677462800~hmac=cc48a9a93694934a8fb88d88823eca7fbd6283e0b412646f3cfcc397895d877f"
          />
        </div>
        <label class="title">{{ post?.title }}</label>
        <div class="column_content_text">
          {{ post?.content }}
        </div>
        <div>
          <button class="button is-primary" @click="isActive = true">Show more</button>
          <div>
            <a-modal
              v-model:visible="isActive"
              width="1000px"
              title="Basic Modal"
            >
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
.column_content {
  border: 1px solid rgb(87, 192, 148);
  padding: 20px 20px;
  border-radius: 20px;
  margin: 10px 20px;
}

.column_content_img {
  width: 400px;
  height: 400px;
  border-radius: 20px;
}

.column_content_text {
  text-align: left;
  padding: 20px;
  width: 100%;
  height: 100px;
  overflow: hidden;
  text-overflow: clip;
  text-justify: kashida;
}
</style>
