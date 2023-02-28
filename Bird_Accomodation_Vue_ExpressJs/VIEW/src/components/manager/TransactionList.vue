<template>
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    <smile-outlined />
                    Customer name
                </span>
            </template>
            <template v-if="column.key === 'bird_name'">
                <span>
                    <smile-outlined />
                    Bird name
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'date'">
                <span>
                    {{ record.date[0] }}
                    <a-divider type="vertical" />
                    {{ record.date[1] }}
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <span>
                    <a>Invite 一 {{ record.name }}</a>
                    <a-divider type="vertical" />
                    <a>Delete</a>
                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link">
                        More actions
                        <down-outlined />
                    </a>
                </span>
            </template>
        </template>
    </a-table>
</template>
<script>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const columns = [{
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
},{
    name: 'Bird',
    dataIndex: 'bird_name',
    key: 'bird_name',
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
}, {
    title: 'Action',
    key: 'action',
}];
const data = [{
    key: '1',
    name: 'John Brown',
    bird_name: 'RaeKyo',
    age: 2,
    address: 'New York No. 1 Lake Park',
    date: ['2022-12-02', '2022-12-04'],
}, {
    key: '2',
    name: 'Jim Green',
    bird_name: 'RaeKyo',
    age: 3,
    address: 'London No. 1 Lake Park',
    date: ['2022-12-02', '2022-12-04'],
}, {
    key: '3',
    name: 'Joe Black',
    bird_name: 'RaeKyo',
    age: 2,
    address: 'Sidney No. 1 Lake Park',
    date: ['2022-12-02', '2022-12-04'],
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