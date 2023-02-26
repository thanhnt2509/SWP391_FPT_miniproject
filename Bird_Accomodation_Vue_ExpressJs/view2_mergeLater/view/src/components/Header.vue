<template>
    <div>
    <header>
      <nav>
        <li><router-link to="/">Logo - Bird Oasis</router-link></li>
        <li><router-link to="/service">Service</router-link></li>
        <li><router-link to="/facilities">Facilities</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/booking">Booking</router-link></li>
        <li><router-link to="/account">Account</router-link></li>
        <li><router-link to="/manager">Manager Page</router-link></li>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>