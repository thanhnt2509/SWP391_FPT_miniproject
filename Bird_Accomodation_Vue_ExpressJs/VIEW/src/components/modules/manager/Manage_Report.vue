<template>
    <div class="container content">
        <div class="has-text-centered">
            <h1 class="title">Report List</h1>
            <p class="subtitle">{{ getReportItem?.date_from }} - {{ getReportItem?.date_to }}</p>
            <!-- action on report -->
            <div>
                <!-- <button @click="onClickAdd" style="margin-right: 10px;" class="button is-primary"><i
                        style="padding-right: 10px;" class="fa-solid fa-plus"></i>Add new report</button> -->
                <button @click="onClickEdit" style="margin-right: 10px;" class="button is-warning"><i
                        style="padding-right: 10px;" class="fa-solid fa-pen"></i>Edit</button>
                <button :disabled="!edit" class="button is-link"><i style="padding-right: 10px;"
                        class="fa-solid fa-upload"></i>Publish</button>
            </div>
        </div>
        <ReportDay />
    </div>
</template>

<script>
import ReportDay from '../report/ReportDay.vue';
import { mapGetters } from 'vuex'
export default {
    name: "Manage_Report",
    data() {
        return {
            edit: false
        }
    },
    components: {
        ReportDay
    },
    computed: {
        ...mapGetters({
            getReportItem: 'getReportItem',
        })
    },
    methods: {
        onClickEdit() {
            this.edit = !this.edit
        },
        onClickAdd() {

        }
    },
    created() {
        try {
            const data = {
                user_id: 2,
                booking_id: 5
            }
            this.$store.dispatch('getReport', data)
        } catch (error) {
            console.log(error)
        }
    },
}
</script>

<style></style>