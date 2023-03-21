<template>
    <!-- allServiceItems: {{ getAllServices }} -->
    <a-table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'status'">
                <span>
                    Status
                </span>
            </template>
            <template v-if="column.key === 'title'">
                <span>
                    Title
                </span>
            </template>
        </template>

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'content'" ellipsis>
                <span class="record_content">
                    {{ record.content }}
                </span>
            </template>
            <template v-if="column.key === 'image'">
                No Image Available
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
        name: "Title",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "Reference",
        dataIndex: "reference",
        key: "reference",
    },
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
    },
    {
        title: "Content",
        dataIndex: "content",
        key: "content",
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
            return store.getters['allPostItems']
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

<style scoped>
.record_content{
    max-width: 300px;
    overflow: hidden;
    word-wrap: break-word;
}
</style>