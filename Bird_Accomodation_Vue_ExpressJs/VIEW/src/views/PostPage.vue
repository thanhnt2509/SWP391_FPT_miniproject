<template>
  <div id="wrapper">
    <h1>Fresh Content</h1>
    <div id="post">
      <div class="each_post" v-for="post in postDataList">
        <img :src="post.img" :alt="post.title">
        <h3>{{ post.title }}</h3>
        <p>{{ post.date }}</p>
        <button class="button is-info"><a :href="post.path" target="_blank">Read More</a></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  computed: {

  },
  data() {
    return {
      postDataList: [
        { path: 'https://www.northernparrots.com/blog/benefits-of-owning-a-pet-bird/', img: '/images/pic1.jpg', title: 'Benefits of Owning a Pet Bird', date: 'January 15, 2019' },
        { path: 'https://petkeen.com/best-pet-birds-for-beginners/', img: '/images/pic2.jpg', title: 'The Top 5 Pet Bird Species for Beginners', date: 'January 26, 2019' },
        { path: 'https://www.animalmedcenter-appleton.com/tips-keep-bird-happy-healthy/', img: '/images/pic3.jpg', title: 'How to Keep Your Pet Bird Happy and Healthy', date: 'January 30, 2019' },
      ]
    };
  },
  methods: {

  },
  components: {

  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}

#wrapper {
  margin-top: 40px;
}

#wrapper h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

#post {
  display: flex;
  justify-content: center;
  height: fit-content;
}

.each_post {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 10px;
}

.each_post h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 0;
  margin: 0;
}

.each_post p {
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  font-size: 1.5rem;
  padding: 10px 0 0 10px;
}

.each_post img {
  width: 100%;
  height: 520px;
}

.each_post button {
  width: 100%;
}

.each_post button a {
  color: white;
}
</style>
