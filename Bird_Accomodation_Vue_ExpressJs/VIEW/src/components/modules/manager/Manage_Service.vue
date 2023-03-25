<template>
  <div class="container content">
    <h1 class="label has-text-centered">Manage Service</h1>
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
