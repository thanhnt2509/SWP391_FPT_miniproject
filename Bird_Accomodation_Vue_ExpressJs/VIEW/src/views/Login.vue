<template>
    <div>
        <h1>Login</h1>
        <div>
            <label>Email</label>
            <input type="tel" placeholder="example@gmail.com">
        </div>
        
        <div>
            <label>Password</label>
            <input type="text" placeholder="********">
        </div>

        <div>
            <input type="checkbox">
            <label>Remember me</label>
        </div>

        <div>
            <button type="submit">Login</button>
            <p>or <router-link to="/register">Sign up</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>