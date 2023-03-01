<template>
    <div class="container">
        <a-table :columns="columns" :data-source="data" class="components-table-demo-nested" v-if="$route.params.id == 1">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'bird_name'">
                    <span>
                        <a href="#">{{ record.bird_name }}</a>
                    </span>
                </template>
            </template>
            <template #operation>
                <!-- <a>Publish</a> -->
                <button class="button is-primary">Publish Report</button>
            </template>
            <template #expandedRowRender>
                <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
                    <template #status>
                        <span>
                            <a-badge status="success" />
                            Finished
                        </span>
                    </template>
                    <template #operation>
                        <span class="table-operation">
                            <!-- <a>Pause</a>
                        <a>Stop</a> -->
                            <button class="button is-light">Edit</button>
                        </span>
                    </template>
                </a-table>
            </template>
        </a-table>
    </div>
</template>
<script>
import { DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const columns = [
    {
        title: 'Bird Name',
        dataIndex: 'bird_name',
        key: 'bird_name',
    },
    {
        title: 'Staff Assigned',
        dataIndex: 'assigned',
        key: 'assigned',
    },
    {
        title: 'Area',
        dataIndex: 'area',
        key: 'area',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Date',
        dataIndex: 'date_report',
        key: 'date_report',
    },
    {
        title: 'Action',
        key: 'operation',
        slots: {
            customRender: 'operation',
        },
    },
];
const data = [];

for (let i = 0; i < 3; ++i) {
    data.push({
        key: i,
        bird_name: 'Typhoon',
        assigned: 'Jhon love bird',
        area: 'Area 1',
        status: 'Pending',
        date_report: '202-12-02',
    });
}

const innerColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Report text',
        dataIndex: 'report_text',
        key: 'report_text',
    },
    {
        title: 'Report img',
        dataIndex: 'report_img',
        key: 'report_img',
        // slots: {
        //     customRender: 'status',
        // },
    },
    {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        slots: {
            customRender: 'operation',
        },
    },
];
const innerData = [];

for (let i = 0; i < 3; ++i) {
    innerData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'Food and supplies',
        report_text: 'The bird is healthy, the food and supplies are enough, maybe :)) The bird is healthy, the food and supplies are enough, maybe :)) The bird is healthy, the food and supplies are enough, maybe :)) The bird is healthy, the food and supplies are enough, maybe :)) ',
        report_img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    });
}

export default defineComponent({
    components: {
        DownOutlined,
    },

    setup() {
        return {
            data,
            columns,
            innerColumns,
            innerData,
        };
    },
});
</script>