<template>
  <div class="container content">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <img class="tile is-child notification is-primary" src="/images/bird-house-design.jpg" alt="">
            <img class="tile is-child notification is-warning" src="/images/bird-fac2.jpg" alt="">
          </div>
          <div class="tile is-parent">
            <img class="tile is-child notification is-info" src="/images/bird-care.jpg" alt="">
          </div>
        </div>
        <div class="tile is-parent">
          <img class="tile is-child notification is-danger" src="/images/bird-housing.jpg" alt="">
        </div>
      </div>
      <div class="tile is-parent">
        <img class="tile is-child notification is-success" src="/images/2_parrot.jpg" alt="">
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical  ">
        <div class="tile">
          <div class="tile is-parent">
            <img class="tile is-child notification is-info" src="/images/bird-boarding.jpg" alt="">
          </div>
          <div class="tile is-parent is-vertical">
            <img class="tile is-child notification is-primary" src="/images/Bird Photography.jpg" alt="">
            <img class="tile is-child notification is-warning" src="/images/bird-cardinal-nest-box.jpg" alt="">
          </div>
          <div class="tile is-parent">
            <img class="tile is-child notification is-success" src="/images/bird-train.jpg" alt="">
          </div>
        </div>
        <div class="tile is-parent">
          <img class="tile is-child notification is-danger" src="/images/big-treehouse.jpg" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',

}
</script>

<style scoped>
img {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>