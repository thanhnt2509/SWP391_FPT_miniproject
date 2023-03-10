<template>
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                    Service
                </span>
            </template>
            <template v-if="column.key === 'description'">
                <span>
                    Description
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                    {{ record.name }}
                </a>
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
            return store.getters['serviceItems']
        });

        const data = getAllServices;
        return {
            data,
            columns,
            getAllServices
        };
    },
});
</script>

