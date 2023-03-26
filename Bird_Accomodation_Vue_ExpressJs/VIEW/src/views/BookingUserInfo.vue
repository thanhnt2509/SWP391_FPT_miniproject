<template>
    <div class="column" id="wrapper_userInfo">
        <div id="wrapper_userInfo_title">
            <h2>User information</h2>
            <img :src="`http://localhost:5000/file/get_user_img/${$store.getters.getUser.user_img}`" alt="">
        </div>
        <table class="table is-fullwidth">
            <tr>
                <td>Fullname</td>
                <td>{{ getUser?.name }}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{{ getUser?.email }}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>{{ getUser?.address }}</td>
            </tr>
            <tr>
                <td>Phone number</td>
                <td>{{ getUser?.phone }}</td>
            </tr>
            <h3>Make a Reservation</h3>
            <tr>
                <td style="border: unset;">Check-in</td>
                <td style="border: unset;"><input class="input" v-model="fields.date_from" type="date"></td>
            </tr>
            <tr>
                <td style="border: unset;">Check-out</td>
                <td style="border: unset;"><input class="input" v-model="fields.date_to" type="date"></td>
            </tr>
            <!-- {{ getNewBooking }} -->
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
    updated() {
        this.date_from = '',
            this.date_to = ''
    }

};
</script>

<style scoped>
#wrapper_userInfo {
    margin: 0 40px;
    width: 100%;
}
#wrapper_userInfo h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

#wrapper_userInfo h3{
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
}

#wrapper_userInfo_title{
    text-align: center;
}

#wrapper_userInfo_title img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}
</style>