<template>
  <div class="column" id="wrapper_reportContent">
    <h1>Leave a report</h1>
    <div class="field">
      <h3>Content</h3>
      <textarea class="textarea" placeholder="Place your report here !" @input="handleInputContent"></textarea>
    </div>

    <div class="field">
      <h3>Date</h3>
      <input class="input" @input="handleInputDate" type="date">
    </div>

    <div class="field">
      <h3>Upload Images</h3>
      <label class="subtitle">Hold Ctrl or Shift to select multiple file</label>
      <input type="file" accept="image/*" multiple @change="handleFileUpload">
    </div>
  </div>

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
    },
    handleInputDate(evt) {
      this.$store.commit('SET_NEW_REPORT_DATE', evt.target.value)
    }
  }
}

</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Popins', sans-serif;
}

#wrapper_reportContent{
  box-sizing: border-box;
  margin-right: 20px;
}

h1{
  font-size: 2.25rem;
  font-weight: 600;
}

h3{
  font-size: 1.25rem;
  font-weight: 600;
}

textarea{
  padding: 10px;
}

input{
  padding: 10px;
}
</style>