<template>
    <div class="container content">
        <div class="columns">
            <div class="column is-four-fifths">
                <h1 class="title">Manager page</h1>
                <p class="subtitle">Manager can approve or reject a transaction</p>
            </div>

            <!-- table of income for day, month, year -->
            <div class="column">
                <h3>Income</h3>
                <p>Day: 1000$</p>
                <p>Month: 10000$</p>
                <p>Year: 100000$</p>
            </div>
        </div>
        <h1>List of transaction that status is Pending and need to processed</h1>
        <TransactionList :isPending="true"/>


        <h1>List of transaction that status is Accepted and need to reprot</h1>
        <TransactionList :isOngoing="true"/>
    </div>
</template>

<script>
import TransactionList from './TransactionList.vue';
export default {
    name: 'ManagerPage',
    components: {
        TransactionList
    }
}
</script>