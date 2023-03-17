<template>
    <!-- allServiceItems: {{ getAllServices }} -->
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    Service
                </span>
            </template>
            <template v-if="column.key === 'status'">
                <span>
                    Status
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <span>
                    {{ record.name }}
                </span>
            </template>
            <template v-if="column.key === 'price'">
                <span>
                    {{ record.price + '$' }}
                </span>
            </template>
            <template v-if="column.key === 'status'">
                <span>
                    <a-tag style="padding: 5px 20px; border-radius: 20px;" :color="record.status === 1 ? 'green' : 'yellow'">
                        {{ record.status === 1 ? 'Active' : 'In-active' }}
                    </a-tag>
                </span>
            </template>
            <template v-if="column.key === 'isHighlight'">
                <span v-if="record.isHighlight === 1">Hot<i style="padding-left: 10px;"
                        class="fa-solid fa-crown"></i></span>
                <span v-else>Normal</span>
            </template>
            <template v-if="column.key === 'isPack'">
                <span v-if="record.isPack === 1">Service Pack</span>
                <span v-else>Service Quantity</span>
            </template>
            <template v-if="column.key === 'image'">
                <a-image width="100px" height="100px" :src="`/public/images/${record.image}.jpg`"></a-image>
            </template>
            <template v-else-if="column.key === 'action'">
                <span>
                    <a href=""><button style="width: 80px;" class="button is-warning">Edit</button></a>
                    <a href=""><button class="button is-link">Switch</button></a>
                </span>
            </template>
        </template>
    </a-table>
</template>

<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, computed } from "vue";
import { useStore } from 'vuex';
const columns = ref([
    {
        name: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        name: "Service",
        dataIndex: "service_name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "HighLight",
        dataIndex: "isHighlight",
        key: "isHighlight",
    },
    {
        title: "Pack",
        dataIndex: "isPack",
        key: "isPack",
    },
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Action",
        key: "action",
    },
]);
export default defineComponent({
    components: {
        SmileOutlined,
        DownOutlined,
    },
    setup() {
        const store = useStore();

        const getAllServices = computed(() => {
            return store.getters['allServiceItems']
        });

        const data = getAllServices;


        return {
            data,
            columns,
            getAllServices,

        };
    },
});
</script>

