<template>
  <div class="container">
      <h1 class="label has-text-centered">Manage Service</h1>
    <a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'service_name'">
          <span>
            <smile-outlined />
            #Service 
          </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
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
  </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
const data = [
  {
    key: "1",
    service_name: "Service1",
    price: '32$',
    description: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    service_name: "Service1",
    price: "42$",
    description: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    service_name: "Service1",
    price: '32$',
    description: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
  },
  setup() {
    const columns = ref([
      {
        dataIndex: "service_name",
        key: "service_name",
        resizable: true,
        width: 150,
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        resizable: true,
        width: 100,
        minWidth: 100,
        maxWidth: 200,
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
      },
      {
        title: "Action",
        key: "action",
      },
    ]);
    return {
      data,
      columns,
      handleResizeColumn: (w, col) => {
        col.width = w;
      },
    };
  },
});
</script>
F
