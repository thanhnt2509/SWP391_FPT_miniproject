<template>
    <div>
        <h1>Register</h1>

        <div>
            <label>Fullname</label>
            <input type="text" placeholder="Nguyen Van A">
        </div>

        <div>
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com">
        </div>
        
        <div>
            <label>Password</label>
            <input type="text" placeholder="********">
        </div>

        <div>
            <label>Phone</label>
            <input type="tel" placeholder="0123456789">
        </div>

        <div>
            <label>Address</label>
            <input type="text" placeholder="9 District HCM city">
        </div>

        <div>
            <input type="checkbox">
            <label>Term and conditions</label>
        </div>

        <div>
            <button type="submit">Register</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Register',

}
</script>