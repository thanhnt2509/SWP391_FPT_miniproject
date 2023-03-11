<template>
    <!-- {{ getAllUserItems }} -->
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <!-- <template v-if="column.key === 'name'">
                <span>
                    Service
                </span>
            </template> -->

        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
                {{ record.status === 1 ? 'Active' : 'Inactive' }}
            </template>
            <template v-if="column.key === 'role'">
                {{ record.role === 1 ? 'Admin' : 'Customer' }}
            </template>
            <template v-else-if="column.key === 'action'">
                <span v-if="record.role === 0">
                    <a href=""><button style="width: 80px;" class="button is-info">Profile</button></a>
                    <a href="">
                        <button v-if="record.status === 1" class="button is-danger">Ban</button>
                        <button v-else class="button is-danger">UnBan</button>
                    </a>

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
        name: "UserId",
        dataIndex: "user_id",
        key: "user_id",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Avatar",
        dataIndex: "user_img",
        key: "user_img",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role",
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

        const getAllUserItems = computed(() => {
            return store.getters['allUserItems']
        });

        const data = getAllUserItems;
        return {
            data,
            columns,
            getAllUserItems
        };
    },
});
</script>

