<template>
  <div class="container content">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <img class="tile is-child notification is-primary" src="../../public/images/avatar_user.jpg" alt="">
            <img class="tile is-child notification is-warning" src="../../public/images/bird-fac2.jpg" alt="">
          </div>
          <div class="tile is-parent">
            <img class="tile is-child notification is-info" src="../../public/images/bird-care.jpg" alt="">
          </div>
        </div>
        <div class="tile is-parent">
          <img class="tile is-child notification is-danger" src="../../public/images/bird-housing.jpg" alt="">
        </div>
      </div>
      <div class="tile is-parent">
        <img class="tile is-child notification is-success" src="../../public/images/2_parrot.jpg" alt="">
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical  ">
        <div class="tile">
          <div class="tile is-parent">
            <img class="tile is-child notification is-info" src="../../public/images/bird-boarding.jpg" alt="">
          </div>
          <div class="tile is-parent is-vertical">
            <img class="tile is-child notification is-primary" src="../../public/images/Bird Photography.jpg" alt="">
            <img class="tile is-child notification is-warning" src="../../public/images/bird-cardinal-nest-box.jpg" alt="">
          </div>
          <div class="tile is-parent">
            <img class="tile is-child notification is-success" src="../../public/images/bird-train.jpg" alt="">
          </div>
        </div>
        <div class="tile is-parent">
          <img class="tile is-child notification is-danger" src="../../public/images/big-treehouse.jpg" alt="">
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