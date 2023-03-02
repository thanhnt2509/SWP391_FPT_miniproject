<template>
  <div class="container">
    <div class="columns">
      <!-- each service -->
      <div class="column is-half each-service">
        <div class="columns ">
          <div class="column content">
            <h1>Food and Supplies</h1>

            <p>- We are prepared Food and Water for your bird at 5AM</p>
          </div>
          <div class="column">
            <img src='https://img.freepik.com/free-vector/hand-drawn-bird-collection_52683-42321.jpg?w=740&t=st=1677462200~exp=1677462800~hmac=cc48a9a93694934a8fb88d88823eca7fbd6283e0b412646f3cfcc397895d877f' alt="">
          </div>
        </div>
      </div>
      <div class="column is-half each-service">
        <div class="columns">
          <div class="column content">
            <h1>Training</h1>

            <p>- Your bird now can reflect to trainer signal!</p>
            <p>- Training service start at 9AM!</p>
          </div>
          <div class="column">
            <img src='https://img.freepik.com/free-vector/hand-drawn-bird-collection_52683-42321.jpg?w=740&t=st=1677462200~exp=1677462800~hmac=cc48a9a93694934a8fb88d88823eca7fbd6283e0b412646f3cfcc397895d877f' alt="">
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>
<script>
export default {
  props: ['booking']
}
</script>

<style scoped>
.each-service{
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}
</style>