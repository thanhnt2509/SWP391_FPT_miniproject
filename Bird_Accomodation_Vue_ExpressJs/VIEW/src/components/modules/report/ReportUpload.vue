<template>
  <div>
    <a-upload
        v-model:file-list="fileList"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        list-type="picture"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        upload
      </a-button>
    </a-upload>

  </div>
</template>
<script>
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref([]);

    return {
      fileList,
    };
  },
});
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>