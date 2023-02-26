<template>
    <div>
        <div>
            <h1>Manager page</h1>
            <p>Manager can approve or reject a transaction</p>
            
            <!-- table of income for day, month, year -->
            <div>
                <h3>Income</h3>
                <p>Day: 1000</p>
                <p>Month: 10000</p>
                <p>Year: 100000</p>
            </div>
        </div>
        <TransactionList />
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