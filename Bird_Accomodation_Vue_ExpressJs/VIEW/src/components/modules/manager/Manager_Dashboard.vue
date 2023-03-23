<template>
    <div>
        <div class="container content">
            <h1 class="label has-text-centered">Dashboard</h1>
            <div class="columns is-multiline">
                <!--  is-two-thirds -->
                <div class="column is-6">
                    <TotalRevenueDay />
                </div>
                <div class="column is-6">

                </div>
                <div class="column is-6">
                    <NumberBillByStatus />
                </div>
                <div class="column is-6">
                    <FrequentBirdTypeBooked />
                </div>
                <div class="column is-6">
                    <MostUsedService />
                </div>
                <div class="column is-6">
                    <NumberBookingStatus />
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import TotalRevenueDay from './statistics/Chart_TotalrevenueDay.vue'

import NumberBillByStatus from './statistics/Chart_NumberBillByStatus.vue'
import FrequentBirdTypeBooked from './statistics/Chart_BirdTypeFreBooked.vue';
import MostUsedService from './statistics/Chart_MostUsedService.vue';
import NumberBookingStatus from './statistics/Chart_NumberBookingStatus.vue';
export default {
    name: "Manager_Dashboard",
    components: {
        TotalRevenueDay,

        NumberBillByStatus,
        FrequentBirdTypeBooked,
        MostUsedService,
        NumberBookingStatus
    },
}
</script>