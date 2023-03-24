<template>
  <div>
    postSelected: {{ postSelected }}
    
  </div>
</template>

<script>
export default {
    name: 'post detail',
    props: {
      postSelected: {
        type: Object,
        default: () => {},
      },
    }
};
</script>

<style scoped></style>
