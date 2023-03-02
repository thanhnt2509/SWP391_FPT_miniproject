<template>
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    <smile-outlined />
                    Customer name
                </span>
            </template>
            <template v-if="column.key === 'transactionId'">
                <span>
                    ID
                </span>
            </template>
            <template v-if="column.key === 'bird_name'">
                <span>
                    <smile-outlined />
                    Bird name
                </span>
            </template>
        </template>

        <!-- action -->
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'bird_name'">
                <span>
                    <a href="#">{{ record.bird_name }}</a>
                </span>
            </template>
            <template v-if="column.key === 'age'">
                <span>
                    {{ record.age -1 === 0 ? 'Young' : record.age -1 === 1 ? 'Mature' : 'Old' }}
                </span>
            </template>
            <template v-else-if="column.key === 'date'">
                <span>
                    {{ record.date[0] }}
                    <a-divider type="vertical" />
                    {{ record.date[1] }}
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <span v-if="isPending">
                    <button class="button is-primary">Approve</button>
                    <a-divider type="vertical" />
                    <button class="button is-danger">Reject</button>
                    <!-- <a-divider type="vertical" /> -->
                </span>
                <span v-else-if="isOngoing">
                    <button class="button is-link"><router-link :to="`/manager/report/${record.transactionId}`">Update</router-link></button>
                    <!-- <a-divider type="vertical" /> -->
                </span>
            </template>
        </template>
    </a-table>
</template>
<script>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const columns = [{
    name: 'TransactionId',
    dataIndex: 'transactionId',
    key: 'transactionId',
},{
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
}, {
    name: 'Bird',
    dataIndex: 'bird_name',
    key: 'bird_name',
}, {
    title: 'Bird Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Action',
    key: 'action',
}];
const data = [{
    key: '1',
    transactionId: 1,
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
    date: ['2022-12-02', '2022-12-04'],
    bird_name: 'RaeKyo',
    age: 2,
}, {
    key: '2',
    transactionId: 2,
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    date: ['2022-12-02', '2022-12-04'],
    bird_name: 'RaeKyo',
    age: 3,
}, {
    key: '3',
    transactionId: 3,
    name: 'Joe Black',
    address: 'Sidney No. 1 Lake Park',
    date: ['2022-12-02', '2022-12-04'],
    bird_name: 'RaeKyo',
    age: 2,
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
    props: ['isPending', 'isOngoing'],
    computed: {

    }
});
</script>