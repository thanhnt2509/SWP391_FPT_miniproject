<template>
    <div>
        <!-- Detail of {{ serviceReport }} -->
        <!-- INFO: {{ reportServiceInfo }} -->
        <!-- edit report: {{ isEditable }} <br>
        prop report : {{ serviceReport }} -->
        new report data : {{ newReport }}<hr>
    </div>

    <div class="columns container main is-multiline">
        <!-- service name and content -->
        <div class="column is-4 " v-for="report in serviceReport" :key="report.service_id">
            <h3>{{ report?.service_name }}</h3>
            <p v-if="!isEditable">{{ report?.service_report_text }}</p>
            <p v-else><textarea :disabled="!$store.getters.getOnEditReport" @input="evt => onInputReportText(evt, report.service_id)" class="input textarea" placeholder="place a report" ></textarea></p>
        </div>
    </div>
    <!-- carousel images -->
    <section>
        <a-carousel class="listImg" :dot-position="'top'">
            <img class="reportImg" v-for="img in reportImagesLink" :src="img.img" alt="">
        </a-carousel>
    </section>
</template>

<script>
export default {
    name: "Report Detail",
    data() {
        return {
            reportImagesLink: [
                { img: '/images/big-treehouse.jpg' },
                { img: '/images/bird-tree-hotel.jpg' },
                { img: '/images/bird-nesting.jpg' },
                { img: '/images/bird-food2.jpg' },
                { img: '/images/Bird Photography.jpg' },
            ],
            newReport: this.serviceReport
        }
    },
    props: {
        serviceReport: {
            type: Array,
            required: true
        },
        isEditable: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {

    },
    methods: {
        onInputReportText(evt, service_id) {
            this.newReport.forEach(report => {
                if (report.service_id === service_id) {
                    report.report_text = evt.target.value
                }
            })
        }
    },
}
</script>

<style scoped>
.main {
    margin: 0;
    padding: 0;
    /* padding-left: 10%;
    padding-right: 10%; */
}

.listImg {
    height: 600px;
    padding-left: 100px;
    padding-right: 100px;
}

.reportImg {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    object-position: right;
}
</style>