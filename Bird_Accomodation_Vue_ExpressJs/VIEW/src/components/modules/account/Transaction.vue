<template>
    <div id="wrapper">
        <h1>Transaction List</h1>
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

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

#wrapper h1{
    text-align: center;
    margin-bottom: 20px;
    font-size: 3rem;
}
</style>