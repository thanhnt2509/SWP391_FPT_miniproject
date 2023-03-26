<template>
    <div id="wrapper_managePost">
        <h1>Manage Post</h1>
        <Manage_PostList />
    </div>
</template>
<script>
import Manage_PostList from './Manage_PostList.vue';
export default {
    components: {
        Manage_PostList
    },
    setup() {
        return {
        };
    },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Popins', sans-serif;
}

#wrapper_managePost {
  font-weight: 520;
}

#wrapper_managePost h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2.75rem;
}
</style>
  