<template>
    <div class="container">
        <div class="">
            <h1 class="title content has-text-centered">Transaction List</h1>
        </div>
        <TransactionList />
    </div>
</template>

<script>
import TransactionList from './TransactionList.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        TransactionList,
    },
});
</script>