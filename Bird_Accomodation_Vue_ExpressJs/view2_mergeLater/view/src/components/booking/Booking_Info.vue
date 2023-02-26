<template>
    <div>
        <h2>Booking Information</h2>
        <ul>
            <li>Booking Date: 
                <p>From: <input disabled type="date" name="date_from" :value="booking.date_from"></p>
                <p>To: <input disabled type="date" name="date_from" :value="booking.date_to"></p>
            </li>
            <li>Booking Status: <button disabled>{{ bookingStatus[booking.status] }}</button></li>
            <li>Booking Price: <button disabled>346.6 $</button></li>
            <li>Payment Method: 
                <select disabled>
                    <option>COD (Cash On Delivery)</option>
                    <option>Momo</option>
                </select>
            </li>
            <li>Payment Status: <button disabled>{{ paymentStatus[booking.status] }}</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Booking_Info',
    data() {
        return {
            bookingStatus: [
                'Pending',
                'On-service',
                'Complete',
                'Cancel',
            ],
            paymentStatus: [
                'Pending',
                'Complete',
            ]
        }
    },
    props: {
        booking: Object,
    }
}
</script>