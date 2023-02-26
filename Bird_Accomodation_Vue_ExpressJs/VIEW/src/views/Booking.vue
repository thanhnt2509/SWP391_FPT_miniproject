<template>
    <div>
        <div>
            <h1>Booking</h1>
            <p>Here you can book your bird's stay at Bird Castle.</p>
            <p>Information show as your account, edit your <a href="#">Profile</a> to booking in different places !</p>
        </div>
        <!-- form -->
        <div>
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

            <!-- select bird -->
            <div>
                <label>Select bird to Boarding</label>
                <select>
                    <!-- list of all bird registered from user -->
                    <option disabled>Please select your bird</option>
                    <option>Typhoon</option>
                    <option>Storm of the night</option>
                    <option>Lighting of the goddess god</option>
                </select>

                <!-- bird select information -->
                <Bird_Info />
            </div>

            <!-- select service pack or customer service pack -->
            <div>
                <label>Select Service Pack</label>
                <select v-model="fields.servicePack">
                    <!-- list of two pack of service and 1 option for custom -->
                    <!-- when custom selected -> show list of checkbox to check on -->
                    <option disabled>Please select your service pack</option>
                    <option>Basic</option>
                    <option>Custom</option>
                </select>

                <!-- list of service selected -->
                <div>
                    <label>Service pack option</label>
                    <!-- list of service in our oasis -->
                    <input :disabled="!isServicePackCustom" type="checkbox" name="service" checked> Food and supplies
                    <input :disabled="!isServicePackCustom" type="checkbox" name="service"> Training
                    <input :disabled="!isServicePackCustom" type="checkbox" name="service"> Play areas
                    <input :disabled="!isServicePackCustom" type="checkbox" name="service" checked> Enrichment activities
                    <input :disabled="!isServicePackCustom" type="checkbox" name="service" checked> Photography
                </div>
            </div>


            <!-- select date_from and date_to to Boarding -->
            <div>
                <div>
                    <label>Arrival Date</label>
                    <input type="date" name="date_from">
                </div>

                <div>
                    <label>Departure Date</label>
                    <input type="date" name="date_to">
                </div>
            </div>

            <div>
                <input type="checkbox">
                <label>Term and conditions</label>
            </div>

            <div>
                <button>Book now</button>
            </div>
        </div>
    </div>
</template>

<script>
import Bird_Info from '../components/bird/Bird_Info.vue'
export default {
    name: 'Booking',
    data() {
        return {
            fields: {
                servicePack: ''
            }
        }
    },
    computed: {
        isServicePackCustom() {
            return this.fields.servicePack === 'Custom'
        }
    },
    components: {
        Bird_Info
    }
}
</script>