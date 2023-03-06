<template>
    <div class="container">
        {{ getUser }}
        <h1 class="label has-text-centered" style="padding-bottom: 20px;">Transaction List</h1>
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
                <template v-if="column.key === 'transactionId'">
                    <a>
                        {{ record.transactionId }}
                    </a>
                </template>
                <template v-else-if="column.key === 'status'">
                    <span>
                        <a-tag :color="record.status === 'completed' ? 'green' : 'yellow'">
                            {{ record.status }}
                        </a-tag>
                    </span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <a><router-link :to="`/account/bird/check/${record.transactionId}`">
                                <button class="button is-link is-light">Detail on #tr{{ record.transactionId }}</button>
                            </router-link></a>
                        <a-divider type="vertical" />
                        <a v-if="record.status === 'completed'"><button class="button is-info">View Bill</button></a>
                        <a v-else><button class="button is-primary" @click="showConfirm">Pay now</button></a>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
</template>
<script>
import { SmileOutlined, DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent, computed } from 'vue';
import { mapGetters } from 'vuex'
import { Modal } from 'ant-design-vue';
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
    dataIndex: 'bird',
    key: 'bird',
}, {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
}, {
    title: 'Action',
    key: 'action',
}];
const data = [{
    key: '1',
    booking_id: '4',
    address: 'New York No. 1 Lake Park',
    bird: 'Typhoon',
    status: 'On-going',
}, {
    key: '2',
    booking_id: '2',
    address: 'London No. 1 Lake Park',
    bird: 'Typhoon',
    status: 'completed',
}, {
    key: '3',
    booking_id: '3',
    address: 'Sidney No. 1 Lake Park',
    bird: 'Typhoon',
    status: 'completed',
}];
export default{
    computed: {
        ...mapGetters['getUser']
    },
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
        return {
            showConfirm,
            data,
            columns,
        };
    },

};
</script>