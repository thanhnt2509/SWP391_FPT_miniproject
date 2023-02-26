<template>
    <!-- list all curernt transaction with satus: PENDING -->
    <div>
        <h2>Transaction List </h2>
        <!-- each transaction -->
        <TransactionList_Item />
    </div>
</template>

<script>
import TransactionList_Item from './TransactionList_Item.vue';
export default {
    name: 'TransactionList',
    components: {
        TransactionList_Item
    }
}
</script>