<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">{{ post?.title }}</h1>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-bird-collection_52683-42321.jpg?w=740&t=st=1677462200~exp=1677462800~hmac=cc48a9a93694934a8fb88d88823eca7fbd6283e0b412646f3cfcc397895d877f"
          alt="Birdhouses hanging in a tree"
          class="image is-4by3"
          style="padding: 0; margin: 0"
        />
        <p>
          As humans, we have a responsibility to care for the environment and protect the
          wildlife that inhabits it. One way we can do this is by creating bird-friendly
          accommodations that provide shelter and food for our feathered friends.
        </p>
        <p>
          Birds play an essential role in our ecosystem by pollinating plants, controlling
          pests, and dispersing seeds. However, with the loss of natural habitats due to
          urbanization and other human activities, many bird species are struggling to
          survive.
        </p>
        <p>
          To help birds thrive, we can make a few simple changes to our homes and gardens.
          Here are three ideas for creating bird-friendly accommodations:
        </p>
        <ul>
          <li>
            Install Birdhouses: Birdhouses provide a safe and secure nesting spot for
            birds, especially during breeding season. You can purchase pre-made birdhouses
            or build your own with the help of online tutorials. Be sure to place them in
            a location that is sheltered from the wind and predators, such as cats.
          </li>
          <li>
            Add Bird Feeders: Bird feeders are an excellent way to attract birds to your
            garden and provide them with a source of food. There are many different types
            of feeders available, from hanging ones to ones that attach to windows. Make
            sure to clean the feeders regularly to prevent the spread of disease.
          </li>
          <li>
            Plant Native Trees and Shrubs: Native trees and shrubs provide birds with a
            source of food and shelter. They also attract insects, which many bird species
            rely on for their diet. When choosing plants for your garden, opt for native
            species that are adapted to your local climate and soil conditions.
          </li>
        </ul>
        <p>
          By making these simple changes to our homes and gardens, we can create
          bird-friendly accommodations that provide shelter, food, and nesting sites for
          our feathered friends.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'post detail',
    props: {
        post: Object
    }
};
</script>

<style scoped></style>
