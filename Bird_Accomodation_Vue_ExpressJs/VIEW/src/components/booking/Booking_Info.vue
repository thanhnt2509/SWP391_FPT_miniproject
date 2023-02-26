<template>
    <div>
        <h2>Booking Information</h2>
        <ul>
            <li>Booking Date: 
                <p>From: <input type="date" name="date_from" value="2022-01-10"></p>
                <p>To: <input type="date" name="date_from" value="2022-01-20"></p>
            </li>
            <li>Booking Status: <button disabled>PENDING</button></li>
            <li>Booking Price: <button disabled>346.6 $</button></li>
            <li>Payment Method: 
                <select>
                    <option>COD (Cash On Delivery)</option>
                    <option>Momo</option>
                </select>
            </li>
            <li>Payment Status: <button disabled>Complete</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Booking_Info',
}
</script>