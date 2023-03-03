<template>
    <div>
        <h2>Booking Information</h2>
        <ul>
            <li>
                <p>From: <input class="input" disabled type="date" name="date_from" :value="booking.date_from"></p>
                <p>To: <input class="input" disabled type="date" name="date_from" :value="booking.date_to"></p>
            </li>
            <li>Payment Method: 
                <select disabled class="select input">
                    <option>COD (Cash On Delivery)</option>
                    <option>Momo</option>
                </select>
            </li>
            <li class="hero">Booking Status: <button class="button" disabled>{{ bookingStatus[booking.status] }}</button></li>
            <li class="hero">Booking Price: <button class="button" disabled>346.6 $</button></li>
            <li class="hero">Payment Status: <button class="button" disabled>{{ paymentStatus[booking.status] }}</button></li>
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