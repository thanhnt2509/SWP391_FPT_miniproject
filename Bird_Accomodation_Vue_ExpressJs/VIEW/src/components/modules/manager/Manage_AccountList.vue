<template>
    {{ getAllUserItems }}
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <!-- <template v-if="column.key === 'name'">
                <span>
                    Service
                </span>
            </template> -->

        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'user_img'">
                <a-image width="100px" height="100px" :src="`http://localhost:5000/file/get_user_img/${record?.user_img}`"></a-image>
            </template>
            <template v-if="column.key === 'status'">
                <a-tag style="padding: 5px 20px; border-radius: 20px;" :color="record.status === 1 ? 'green' : 'red'">
                    {{ record.status === 1 ? 'Active' : 'In-active' }}
                </a-tag>
                <!-- <p>{{ record.status === 1 ? 'Active' : 'Inactive' }}</p> -->
            </template>
            <template v-if="column.key === 'role'">
                {{ record.role === 1 ? 'Admin' : 'Customer' }}
            </template>
            <template v-else-if="column.key === 'action'">
                <span v-if="record.role === CONST.account_role['CUSTOMER']">
                    <!-- <button style="width: 80px; margin-right: 10px;" class="button is-info">Profile</button> -->

                    <a-popconfirm v-if="record.status === 1" title="Are you sure to ban this user ?" ok-text="Yes"
                        cancel-text="No" @confirm="changeAccountStatus(record.user_id, CONST.account_status['ACTIVE'])"
                        @cancel="">
                        <button class="button is-danger">Ban</button>
                    </a-popconfirm>

                    <a-popconfirm v-if="record.status === 0" title="Are you sure to ban this user ?" ok-text="Yes"
                        cancel-text="No" @confirm="changeAccountStatus(record.user_id, CONST.account_status['BANNED'])"
                        @cancel="">
                        <button class="button is-success">UnBan</button>
                    </a-popconfirm>

                </span>
            </template>
        </template>
    </a-table>
</template>

<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, computed } from "vue";
import { useStore } from 'vuex';
import CONST from "./CONST";
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
        title: "Name",
        dataIndex: "name",
        key: "name",
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

        const changeAccountStatus = (user_id, status) => {
            store.dispatch('changeAccountStatus', { user_id, status });
            // console.log(`userId: ${userId}, status: ${status}`);
        }
        return {
            data,
            columns,
            getAllUserItems,
            CONST,
            changeAccountStatus
        };
    },
});
</script>

