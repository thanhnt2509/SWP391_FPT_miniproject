<template>
  <!-- allServiceItems: {{ getAllServices }} -->
  <a-modal v-model:visible="visible" :title="`Edit Service: ${serviceSelected.name}`" width="1000px">
    <Manage_ServiceUpdate :serviceSelected="serviceSelected"/>
    <template #footer>
      <a-button key="back" @click="visible = false">Cancel</a-button>
      <!-- handle update click -->
      <a-popconfirm title="Are you sure update this service?" ok-text="Yes" cancel-text="No" @confirm="confirmUpdate"
        @cancel="cancel">
        <a-button key="submit" type="primary">Update</a-button>
      </a-popconfirm>
    </template>
  </a-modal>

  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span> Service </span>
      </template>
      <template v-if="column.key === 'status'">
        <span> Status </span>
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
          {{ record.price + "$" }}
        </span>
      </template>
      <template v-if="column.key === 'status'">
        <span>
          <a-tag style="padding: 5px 20px; border-radius: 20px" :color="record.status === 1 ? 'green' : 'yellow'">
            {{ record.status === 1 ? "Active" : "In-active" }}
          </a-tag>
        </span>
      </template>
      <template v-if="column.key === 'isHighlight'">
        <span v-if="record.isHighlight === 1">Hot<i style="padding-left: 10px" class="fa-solid fa-crown"></i></span>
        <span v-else>Normal</span>
      </template>
      <template v-if="column.key === 'isPack'">
        <span v-if="record.isPack === 1">Service Pack</span>
        <span v-else>Service Quantity</span>
      </template>
      <template v-if="column.key === 'image'">
        <a-image width="100px" height="100px"
          :src="`http://localhost:5000/file/get_service_img/${record.image}`"></a-image>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <button @click="handleEdit(record)" style="width: 80px" class="button is-warning">Edit</button>
          <button class="button is-link">Switch</button>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import Manage_ServiceUpdate from "./Manage_ServiceUpdate.vue";
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
    Manage_ServiceUpdate
  },
  setup() {
    const store = useStore();

    const getAllServices = computed(() => {
      return store.getters["allServiceItems"];
    });

    const data = getAllServices;

    const visible = ref(false)

    const serviceSelected = ref({})

    const handleEdit = (service) => {
      visible.value = true
      serviceSelected.value = service
      console.log(serviceSelected.value);
    }

    const confirmUpdate = async () => {
      const formData = new FormData()
      formData.append('service_id', serviceSelected.value.service_id)
      formData.append('service_name', serviceSelected.value.service_name)
      formData.append('price', serviceSelected.value.price)
      formData.append('description', serviceSelected.value.description)
      formData.append('status', serviceSelected.value.status)
      formData.append('isHighlight', serviceSelected.value.isHighlight)
      formData.append('isPack', serviceSelected.value.isPack)

      const response = await fetch('http://localhost:5000/service/update_service', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: {}
      })
    }
    return {
      data,
      columns,
      getAllServices,
      visible,
      serviceSelected,
      handleEdit,
      confirmUpdate
    };
  },
});
</script>
