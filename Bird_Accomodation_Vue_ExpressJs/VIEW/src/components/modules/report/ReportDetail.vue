<template>
    <div>
        <!-- Detail of {{ serviceReport }}
        IMG: {{ reportImages }}
        INFO: {{ reportServiceInfo }} -->
        edit report: {{ isEditable }}
    </div>

    <div class="columns container main">
        <!-- service name and content -->
        <div class="column is half" v-for="report in reportServiceInfo">
            <h3>{{ report.name }}</h3>
            <p v-if="!isEditable">{{ report.content }}</p>
            <p v-else><textarea class="input textarea" placeholder="place a report" :value="report.id"></textarea></p>
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
        reportImages() {
            return this.serviceReport.map((item) => ({ img: item.service_report_image }))
        },
        reportServiceInfo() {
            return this.serviceReport.map((item) => ({ id: item.service_id, name: item.service_name, content: item.service_report_text }))
        },
    }

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