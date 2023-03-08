<template>
    <div class="main column">
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
                <td><input v-model="fields.date_from" type="date"></td>
            </tr>
            <tr>
                <td>Check-out</td>
                <td><input v-model="fields.date_to" type="date"></td>
            </tr>
            {{ getNewBooking }}
        </table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookingUserInfo',
    data() {
        return {
            fields: {
                date_from: '',
                date_to: '',
            }
        }
    },
    computed: {
        ...mapGetters(['getUser', 'getNewBooking']),
    },
    watch: {
        fields: {
            handler: function (val, oldVal) {
                this.$store.dispatch('setBookingDate', this.fields);
            },
            deep: true
        }
    },

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
    /* background-color: rgb(120, 131, 134); */
    background-image: url('/images/avatar_user.jpg');
    background-position: center;
    border-radius: 50%;
    display: inline-block;
}
</style>