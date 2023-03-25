<template>
    <!-- Service -->
    <div id="wrapper">
        <section id="first_section">
            <h2>Our Feathered Guests' Services</h2>
            <p>
                Our Feathered Guests' Services" include clean and spacious cages, fresh food
                and water daily, bird-safe toys, and caring staff to monitor your bird's
                health and behavior.
            </p>
            <p>We also offer bird grooming, exercise and socialization
                opportunities, and personalized care to ensure your bird is comfortable and
                happy. Contact us today to learn more!
            </p>
            <button @click="$router.push('/service')">
                Detail Serivice
            </button>
        </section>

        <!-- list all service -->
        <ServiceList :services="$store.getters.highlightedServiceItems" />
    </div>
</template>

<script>
import ServiceList from "./ServiceList.vue";
export default {
    name: "Homepage_Intro",
    components: {
        ServiceList,
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#wrapper {
    border: 0.6px solid rgb(129, 129, 129);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    /* margin-bottom: 40px; */
    max-width: 80%;
}

#first_section {
    position: relative;
    width: 100%;
    padding: 20px;
}

#first_section h2 {
    font-weight: 600;
    font-size: 2.25rem;
}

#first_section p {
    width: 50%;
    font-size: 1rem;
    margin: 20px 0px;
}

#first_section button {
    position: absolute;
    padding: 20px;
    right: 9%;
    top: 30%;
    background-color: rgba(255, 255, 255, 0.3);
    border: 0.8px solid rgba(184, 149, 123);
    font-size: 2rem;
    font-weight: 600;
    color: #B8957B;
    border-radius: 50px;
    cursor: pointer;
}

#first_section button:hover {
    color: white;
    background-color: #B8957B;
}
</style>