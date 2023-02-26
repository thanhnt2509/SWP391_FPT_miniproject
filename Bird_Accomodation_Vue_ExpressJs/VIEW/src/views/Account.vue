<template>
    <div>
        <h1>Account</h1>
        <!-- nav bar for account CUSTOMER-->
        <nav>
            <li><router-link to="/account/profile">Profile</router-link></li>
            <li><router-link to="/account/bird/list">Bird List</router-link></li>
            <li><router-link to="/account/bird/check">Bird Check</router-link></li>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Account',
    components: {
        
    }
}
</script>