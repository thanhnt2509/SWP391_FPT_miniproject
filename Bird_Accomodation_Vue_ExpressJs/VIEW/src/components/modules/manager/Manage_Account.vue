<template>
    <div class="container content">
        <h1 class="label has-text-centered">Manage Account</h1>
        <Manage_AccountList />
    </div>
</template>

<script>
import Manage_AccountList from './Manage_AccountList.vue';
export default {
    name: "Manage_Account",
    components: {
        Manage_AccountList
    }
}
</script>