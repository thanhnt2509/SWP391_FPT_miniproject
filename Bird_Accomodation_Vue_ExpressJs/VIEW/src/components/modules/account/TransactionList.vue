<template>
    <div>
        <a-table :columns="columns" :data-source="data">
            <template #headerCell="{ column }">
                <template v-if="column.key === 'booking_id'">
                    <span>
                        <smile-outlined />
                        Booking_id
                    </span>
                </template>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'bird'">
                    <a>
                        {{ record.bird }}
                    </a>
                </template>
                <template v-else-if="column.key === 'status'">
                    <span>
                        <!-- <a-tag :color="bookingState[record.status].color">
                            {{ bookingState[record.status].state }}
                        </a-tag> -->
                        <!-- :style="`color: ${bookingState[record.status].color}`" -->
                        <p>{{ bookingState[record.status].state }}</p>
                    </span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <!-- <a><button class="button is-primary">Detail on #tr_{{ record.booking_id }}</button></a> -->
                        <a-divider type="vertical" />
                        <a v-if="bookingState[record.status].state === 'Pending'">
                            <button disabled class="button is-warning is-light">
                                <i style="padding-right: 10px" class="fa-solid fa-circle-notch"></i>Processing
                            </button>
                            <a-divider type="vertical" />


                            <a-popconfirm title="Are you sure to cancel this booking ?" ok-text="Yes" cancel-text="No"
                                @confirm="cancelBooking(record.booking_id)" @cancel="">
                                <button class="button is-warning is-danger">
                                    <i style="padding-right: 10px" class="fa-solid fa-circle-xmark"></i>Cancel
                                </button>
                            </a-popconfirm>
                        </a>
                        <a v-else-if="bookingState[record.status].state === 'Approved'">
                            <button disabled class="button is-success is-light"><i style="padding-right: 10px"
                                    class="fa-regular fa-circle-check"></i>Approved
                            </button>

                            <a-divider type="vertical" />

                            <a-popconfirm title="Are you sure to cancel this booking ?" ok-text="Yes" cancel-text="No"
                                @confirm="cancelBooking(record.booking_id)" @cancel="">
                                <button class="button is-warning is-danger">
                                    <i style="padding-right: 10px" class="fa-solid fa-circle-xmark"></i>Cancel
                                </button>
                            </a-popconfirm>
                        </a>
                        <router-link :to="`/report/${record.booking_id}`"
                            v-else-if="bookingState[record.status].state === 'On-going'"><button
                                class="button is-info is-light"><i style="padding-right: 10px"
                                    class="fa-solid fa-circle-info"></i>Check {{ record.bird_name }}</button></router-link>
                        <router-link :to="`/bill/${record.booking_id}`"
                            v-else-if="bookingState[record.status].state === 'Completed'"><button
                                class="button is-link is-light"><i style="padding-right: 10px"
                                    class="fa-solid fa-wallet"></i>View bill</button></router-link>
                        <a v-else-if="bookingState[record.status].state === 'Canceled'"><button
                                class="button is-danger is-light"><i style="padding-right: 10px"
                                    class="fa-brands fa-rev"></i>Re-booking</button></a>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
    <!-- {{ getBooking }} -->
</template>
<script>
import { SmileOutlined, DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent, computed } from 'vue';
import { Modal } from 'ant-design-vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
const columns = [{
    name: 'Booking_Id',
    dataIndex: 'booking_id',
    key: 'booking_id',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Bird Name',
    dataIndex: 'bird_name',
    key: 'bird_name',
}, {
}, {
    title: 'Date from',
    dataIndex: 'date_from',
    key: 'date_from',
}, {
}, {
    title: 'Date to',
    dataIndex: 'date_to',
    key: 'date_to',
}, {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
}, {
    title: 'Action',
    key: 'action',
}];



export default defineComponent({
    components: {
        SmileOutlined,
        DownOutlined,
    },

    setup() {
        const showConfirm = () => {
            Modal.confirm({
                title: 'Confirm Pay this transaction online ?',
                icon: createVNode(ExclamationCircleOutlined),
                content: 'Click the button below to pay this transaction online',
                onOk() {
                    return new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    }).catch(() => console.log('Oops errors!'));
                },
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onCancel() { },
            });
        };

        const store = useStore();
        const router = useRouter()

        const getBooking = computed(() => store.getters['getBookings']);

        const data = store.getters['getBookings']

        const bookingState = store.getters['bookingStateItems']

        const cancelBooking = (booking_id) => {
            store.dispatch('rejectBooking', booking_id)
            store.dispatch('getAllBooking')
            router.push('/account/transaction')
        }
        return {
            showConfirm,
            data,
            columns,
            getBooking,
            bookingState,
            cancelBooking
        };
    },

});
</script>