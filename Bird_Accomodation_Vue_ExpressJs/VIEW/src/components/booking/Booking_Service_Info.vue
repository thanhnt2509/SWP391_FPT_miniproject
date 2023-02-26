<template>
    <div>
        <h2>Serivce booked</h2>
        <ul>
            <!-- List of service that booked with price at the moment -->
            <!-- can select more service and submit: will be next iteration -->
            <li><input type="checkbox" name="service" checked disabled>Food and supplies </li>
            <li><input type="checkbox" name="service" checked disabled>Training</li>
            <li><input type="checkbox" name="service" checked disabled>Play areas</li>
            <li><input type="checkbox" name="service" checked disabled>Enrichment activities</li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'Booking_Service_Info',
}
</script>