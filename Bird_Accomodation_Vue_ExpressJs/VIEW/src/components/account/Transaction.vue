<template>
    <div class="container">
        <a-table :columns="columns" :data-source="data">
            <template #headerCell="{ column }">
                <template v-if="column.key === 'transactionId'">
                    <span>
                        <smile-outlined />
                        TransactionId
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
                        <router-link class="navbar-item" :to="`/account/bird/check/${record.transactionId}`">Detail 一 {{ record.transactionId }}</router-link>
                        <a-divider type="vertical" />
                        <div v-if="record.status === 'completed'">
                            <a>View Bill</a>
                            <a-divider type="vertical" />
                        </div>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const columns = [{
    name: 'TransactionId',
    dataIndex: 'transactionId',
    key: 'transactionId',
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
    transactionId: '1',
    address: 'New York No. 1 Lake Park',
    bird: 'Typhoon',
    status: 'On-going',
}, {
    key: '2',
    transactionId: '2',
    address: 'London No. 1 Lake Park',
    bird: 'Typhoon',
    status: 'completed',
}, {
    key: '3',
    transactionId: '3',
    address: 'Sidney No. 1 Lake Park',
    bird: 'Typhoon',
    status: 'completed',
}];
export default defineComponent({
    components: {
        SmileOutlined,
        DownOutlined,
    },
    setup() {
        return {
            data,
            columns,
        };
    },
});
</script>