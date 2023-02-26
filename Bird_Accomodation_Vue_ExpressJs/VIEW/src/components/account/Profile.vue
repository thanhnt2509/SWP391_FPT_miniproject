<template>
    <div>
        <h1>Profile</h1>
        <p>Your information will show here, change it if you need to booking service in different address !!!</p>
        <button>Edit</button>

        <div>
            <label>Fullname</label>
            <input disabled type="text" value="Nguyen Van A">
        </div>

        <div>
            <label>Email</label>
            <input disabled type="email" value="example@gmail.com">
        </div>

        <div>
            <label>Phone</label>
            <input disabled type="tel" value="0989765231">
        </div>

        <div>
            <label>Address</label>
            <input disabled type="text" value="9 District HCM city">
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
}
</script>