<template>
    <div id="wrapper_manageAccount">
        <h1>Manage Account</h1>
        <Manage_AccountList />
    </div>
</template>

<script>
import Manage_AccountList from './Manage_AccountList.vue';
export default {
    name: "Manage_Account",
    components: {
        Manage_AccountList
    }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Popins', sans-serif;
}

#wrapper_manageAccount {
  font-weight: 520;
}

#wrapper_manageAccount h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2.75rem;
}
</style>