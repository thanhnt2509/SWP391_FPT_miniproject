<template>
    <div>
        <h2>Report</h2>
        <!-- list of button that show date as content  -->
        <!-- when clicked then show the report of that day include image and text on each SERVICES-->
            <!-- tabbed interface -->
        <!-- <div>
            <button>2022-01-10</button>
            <button>2022-01-11</button>
            <button>2022-01-12</button>
            <button>2022-01-13</button>
        </div> -->

        <div>
            <!-- tabbed tab -->
            <div>
                <!-- list of service name and images updated here -->
                <div v-for="(report, index) in booking.reports">
                    <h3>Report Date: {{ new Date(report.date).toISOString().slice(0, 10)}}</h3>
                    <h4>{{ report.name }}</h4>
                    <p>Text: {{ report.service_report_text }}</p>
                    <p>Images: {{ report.service_report_image }}</p>
                </div>
            </div>


            <!-- use can comment the service here -->
            <!-- <div>
                <h3>Leave a comment</h3>
                <textarea placeholder="comment about service"></textarea>
                <button type="submit">Submit</button>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Booking_Report',
    data() {
        return {
            report_date: [],
        }
    },
    computed: {

    },
    props: {
        booking: Object
    }
}
</script>