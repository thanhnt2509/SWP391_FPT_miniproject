<template>
    <div>
        <div>
            <h4>Transaction ID: 123456</h4>
            <p>Customer: John Doe</p>
            <p>Room: 123</p>
            <p>Check in: 2020-01-01</p>
            <p>Check out: 2020-01-02</p>
            <p>Price: 1000</p>
            <p>Status: PENDING</p>
        </div>
        <div>
            <!-- this transaction will become On-going -->
            <button>Approve</button>
            <!-- this transaction will become Canceled -->
            <button>Reject</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TransactionList_Item',
}
</script>