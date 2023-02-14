<template>
    <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    
</template>

<script>

</script>


<style scoped>
.box_sizing {
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    font-size: large;
}

.text_center {
    text-align: center;
}

.xxlarge {
    font-size: xx-large;
}

.content {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
    padding: 20px;
}
</style>