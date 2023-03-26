<template>
  <div id="wrapper_manageService">
    <h1>Manage Service</h1>

    <Manage_ServiceList />
  </div>
</template>
<script>
import Manage_ServiceList from "./Manage_ServiceList.vue";
export default {
  components: {
    Manage_ServiceList,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Popins', sans-serif;
}

#wrapper_manageService {
  font-weight: 520;
}

#wrapper_manageService h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2.75rem;
}
</style>
