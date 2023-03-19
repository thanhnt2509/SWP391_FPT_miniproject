<template>
    <div>
        <Manager_menu />
    </div>
</template>

<script>
import Manager_menu from './Manager_menu.vue';

export default {
    name: "ManagerPage",
    components: {
        Manager_menu
    },
    created() {
        this.$store.dispatch('getAllServices');
        this.$store.dispatch('getAllUsers');
        this.$store.dispatch('getAllBookings');
        this.$store.dispatch('getAllPosts');
    }
}
</script>