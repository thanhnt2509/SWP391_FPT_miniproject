<template>
    <div class="container">
        <div class="columns">
            <h1 class="label content has-text-centered column is-four-fifths">Transaction List</h1>
            
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
    setup() {


        return {
            
        };
    },
});
</script>