<template>
  <div class="container has-text-centered">
    <h1 class="">List of bird type we support for boarding will goes here</h1>
    <div class="columns">
      <section class="column is-6">
        <table class="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <th>Service</th>
            <th>Price</th>
            <th>Type</th>
            <!-- {{serviceItems}} -->
          </thead>
          <tbody>
            <tr v-for="service in serviceItems">
              <td style="text-align: left">{{ service.name }}</td>
              <td>{{ service.price }}/$</td>
              <td>{{ service.isPack === 1 ? "Pack" : "" }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="column is-3">
        <table class="table is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <th>Bird Type Name</th>
            <th>Max Quantity</th>
            <th>Max Weight</th>
          </thead>
          <tbody>
            <tr v-for="type in birdTypeItems">
              <td>{{ type.type_name }}</td>
              <td>1</td>
              <td>&lt; 10kg</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="column is-3">
        <h3>Report Information</h3>
        <p>The daily report will updated at 8PM everyday</p>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BirdList",
  computed: {
    ...mapGetters({
      birdTypeItems: "birdTypeItems",
      serviceItems: "serviceItems",
    }),
  },
};
</script>
<style>
h1 {
  font-weight: 700;
  font-size: 2rem;
}
h3 {
  font-size: 1.2rem;
}
</style>
