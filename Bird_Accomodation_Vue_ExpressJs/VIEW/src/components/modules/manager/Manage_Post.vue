<template>
    <div class="container content">
        <h1 class="label has-text-centered">Manage Post</h1>
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
  
  