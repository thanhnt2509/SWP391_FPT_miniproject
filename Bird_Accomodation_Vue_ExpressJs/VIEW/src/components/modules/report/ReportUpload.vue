<template>
  <h1 class="title">
    Leave a report
  </h1>
  <div class="field">
    <label class="label">Content</label>
    <textarea class="textarea" placeholder="write report here !" @input="handleInputContent"></textarea>
  </div>

  <div class="field">
    <label class="label">Upload Images</label>
    <label class="subtitle">Hold Ctrl or Shift to select multiple file</label>
    <input type="file" accept="image/*" multiple @change="handleFileUpload">
  </div>

  new report : {{ $store.getters.getNewReport }}
</template>

<script>
export default {
  name: "ReportUpload",
  data() {
    return {

    }
  },
  methods: {
    handleFileUpload(evt) {
      this.$store.commit('SET_NEW_REPORT_IMAGES', evt.target.files)
    },
    handleInputContent(evt) {
      this.$store.commit('SET_NEW_REPORT_CONTENT', evt.target.value)
    }
  }
}

</script>