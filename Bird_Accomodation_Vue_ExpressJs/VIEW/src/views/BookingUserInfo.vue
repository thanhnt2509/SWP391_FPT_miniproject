<template>
    <div class=" main">
        <h1 class="label has-text-centered">User information</h1>
        <div class="user_img">
            <div class="user_img_image">

            </div>
        </div>
        <table>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Fullname</td>
                <td>{{ getUser.name }}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{{ getUser.email }}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>{{ getUser.address }}</td>
            </tr>
            <tr>
                <td>Phone number</td>
                <td>{{ getUser.phone }}</td>
            </tr>
            <h3 style="white-space: nowrap;">Make a Reservation</h3>
            <tr>
                <td>Check-in</td>
                <td><input type="date"></td>
            </tr>
            <tr>
                <td>Check-out</td>
                <td><input type="date"></td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookingUserInfo',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getUser']),
    },
    methods: {

    }

};
</script>

<style scoped>
.user_img {
    width: 100%;
    height: 150px;
    text-align: center;
}

.user_img_image {
    width: 150px;
    height: 150px;
    background-color: rgb(120, 131, 134);
    border-radius: 50%;
    display: inline-block;
}
</style>