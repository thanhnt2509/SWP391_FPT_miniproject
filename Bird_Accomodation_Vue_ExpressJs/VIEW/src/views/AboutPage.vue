<template>
    <div>
        <h1>Greeting !</h1>
        <section class="columns">
            <p class="column is-8">We are a team of bird lovers and experts, dedicated to providing top-quality care for pet
                birds. Our passion
                for
                birds started when we were young and has only grown over the years. We understand the importance of
                providing a
                safe, comfortable, and stimulating environment for your pet bird, and we are committed to making that a
                reality.
            </p>
            <img class="column is-4" src="/images/bird-care.jpg" alt="">
        </section>

        <section class="columns">
            <img class="column is-4" src="/images/bird-fac2.jpg" alt="">
            <div class="column is-8">
                <p> At Bird Oasis, we believe that every bird deserves the best possible care, and we are dedicated to
                    making
                    that
                    a reality. Our goal is to provide a comprehensive range of services and amenities to help your bird
                    thrive
                    and
                    live a happy and healthy life.
                </p>

                <p>Our team of experienced bird care specialists and trainers is dedicated to providing the best possible
                    care
                    for
                    your pet. Our facilities are equipped with everything your bird needs, including spacious living
                    quarters,
                    play
                    areas, bird toys and accessories, and more.</p>
            </div>
        </section>

        <section class="columns">
            <div class="column is-8">
                <p> We understand that your pet bird is a cherished member of your family, and we are committed to treating
                    them
                    with the love and care they deserve. Whether you are looking for bird housing, bird grooming services,
                    bird
                    training, or simply a safe place for your bird to stay while you're away, we have you covered.</p>

                <p> At Bird Accommodation, we are passionate about providing the best care for your pet bird, and we are
                    committed
                    to helping you and your bird build a strong and lasting bond. Contact us today to learn more about our
                    services
                    and to see why Bird Accommodation is the best choice for your pet bird.</p>
            </div>
            <img class="column is-4" src="/images/bird-housing.jpg" alt="">
        </section>

        <!-- bird-care.jpg, bird-fac2.jpg, bird-fac3.jpg, bird-housing.jpg -->
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}

h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 20px;
}
section{
    margin-bottom: 20px;
}

section p {
    text-indent: 2.5rem;
}
</style>