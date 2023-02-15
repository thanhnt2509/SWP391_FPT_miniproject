<template>
    <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>Account</a-breadcrumb-item>
            <a-breadcrumb-item>Booking</a-breadcrumb-item>
            <a-breadcrumb-item>Tracking</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content class="TransactionTitle"
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <a-row type="flex" class="bird_row ">
                <a-col :flex="4">
                    <a-divider orientation="left">Bird Tracking #B05 - Date: {{ booking_data[0].date_to }} </a-divider>

                    <a-row type="flex">
                        <a-col :flex="1">
                            <div class="img_report">
                                <img src="../components/images/bird1.jpg" alt="bird report image">
                            </div>
                        </a-col>
                        <a-col :flex="4">
                            <a-row type="flex">
                                <a-col :flex="3">
                                    <h2 class="title_report">Bird Overview</h2>
                                    <p><b>Name:</b> {{ bird_data.bird_name }}</p>
                                    <p><b>Species:</b> {{ bird_data.bird_name }}</p>
                                    <p><b>Age:</b> {{
                                        bird_data.age <= 3 ? 'Young' : bird_data == 4 ? "Mature" : "Old"
                                    }}</p>
                                            <p><b>Breed:</b> {{ bird_data.breed }}</p>
                                            <p><b>Gender:</b> {{ bird_data.gender }}</p>
                                            <p><b>Description:</b> {{ bird_data.description }}</p>
                                </a-col>
                                <a-col :flex="2">
                                    <h2 class="title_report">Services - SelectedPack: <a-button
                                            type="primary">PREMIUM</a-button></h2>
                                    <a-row type="flex">
                                        <a-col :flex=2>
                                            <div class="text_report">
                                                <p>Food and Supplies</p>
                                                <p>Play areas</p>
                                                <p>Grooming</p>
                                                <p>Spa</p>
                                                <p>Bird photography</p>
                                                <p>Bird grooming</p>
                                            </div>
                                        </a-col>
                                        <a-col :flex=3>
                                            <div style="width: 170px">
                                                <a-progress :percent="30" size="small" />
                                                <a-progress :percent="50" size="small" status="active" />
                                                <a-progress :percent="70" size="small" />
                                                <a-progress :percent="100" size="small" />
                                                <a-progress :percent="100" size="small" />
                                                <a-progress :percent="100" size="small" />
                                                <!-- <a-progress :percent="70" size="small" status="exception" /> -->
                                            </div>
                                        </a-col>
                                    </a-row>
                                </a-col>
                            </a-row>
                            <a-col :flex="3">
                                    <h2 class="title_report">Feedback report</h2>
                                    <a-form>
                                        <a-form-item>
                                            <a-textarea placeholder="Place your feedback to improve your interaction between bird and you" rows="4" />
                                        </a-form-item>
                                        <a-form-item>
                                            <a-button type="primary">Submit</a-button>
                                        </a-form-item>
                                    </a-form>
                                </a-col>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :flex="1">
                    <h2 class="title_report">Transaction Status</h2>
                    <p>Customer Name: {{ user_data.name }}</p>
                    <p>Email: {{ user_data.email }}</p>
                    <p>Phone: {{ user_data.phone }}</p>
                    <p>Address: {{ user_data.address }}</p>
                    <p>Arrival Date: {{ booking_data[0].date_from }}</p>
                    <p>Departure Date: {{ booking_data[0].date_to }}</p>
                    <p>Transaction Status: <a-button>Completed</a-button></p>
                    <a-result status="success" title="Successful!" sub-title="Transaction number: #B05" />
                        <!-- <template #extra>
                            <a-button key="console" type="primary">Go Console</a-button>
                            <a-button key="buy">Buy Again</a-button>
                        </template> -->
                    <!-- </a-result> -->
                </a-col>
            </a-row>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import { Button, Modal } from 'ant-design-vue';
const bird_data = ref({
    bird_name: 'Jobb',
    species: 'Parrot',
    breed: 'Orange-cheeked',
    age: 2,
    gender: 'Male',
    description: 'A chaos bird'
});
const user_data = ref({
        user_id: 'U2',
        role: 'user',
        name: 'Van Tien',
        password: '123456',
        address: '1234, 5th Street, New York, NY 10001',
        phone: '123-456-7890',
        email: 'tien@gmail.com',
        status: 1,
        user_img: 'https://i.imgur.com/4Yq2X7G.jpg'
    })

const booking_data = ref([
    {
        booking_id: 'Bo1',
        user_id: 'U1',
        date_from: '2022-12-05',
        date_to: '2022-12-10',
        total_price: 600,
        status: 0
    },
    {
        booking_id: 'Bo2',
        user_id: 'U1',
        date_from: '2022-12-05',
        date_to: '2022-12-10',
        total_price: 400,
        status: 1
    },
])

const visible = ref(true)

function showModal() {
    visible.value = true;
}
</script>


<style scoped>
.bird_row {
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
    box-shadow: 10px 10px rgb(129, 124, 124);
    border-radius: 20px;
}

.text_report p {
    text-align: center;
    margin: 0;
    padding: 0;
}

.title_report {
    /* text-align: center; */
    margin-top: 20px;
}

.img_report img {
    width: 400px;
    height: 600px;
    border-radius: 20px;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
}

.btn {
    width: 100px;
    height: 40px;
    margin-top: 20px;
    margin-left: 100px;
    padding: 10px;
    text-align: center;
}
</style>