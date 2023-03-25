<template>
    <!-- Highlight section -->
    <section id="wrapper">
        <h2>What Sets Us Apart</h2>
        <div id="wrapper_content">
            <img src="/images/big-treehouse.jpg" alt="">
            <div id="wrapper_content_text">
                <div class="each_highlight" v-for="h in hItems">
                    <h3>{{ h.title }}</h3>
                    <p>{{ h.content }}</p>
                </div>
            </div>
        </div>
    </section> 
</template>
<script>
export default {
    name: "Homepage_Highlight",
    data() {
        return {
            hItems: [
                {
                    title: "Oasis Care system",
                    content:
                        "we ensure our facilities are not only spotless, but fully sanitized, and smell clean, so that your dog stays healthy while in our care.",
                },
                {
                    title: "Oasis Staff experience",
                    content:
                        "We are proud to lead the way in the luxury pet hospitality industry, and provide world class accommodations and service to our guests so that your dog is happy, comfortable, and relaxed.",
                },
                {
                    title: "Oasis Boarding system",
                    content:
                        "Boarding birds is the act of temporarily housing birds in a specialized facility or with a professional caregiver while their owners are away. This ensures that the birds receive proper care and attention in their owner sabsence",
                },
            ],
        }
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#wrapper {
    position: relative;
    width: 80%;
    margin: 40px auto 0px auto;
    /* border: 0.6px solid rgb(129, 129, 129); */
}

#wrapper h2 {
    font-weight: 600;
    font-size: 2.25rem;
    padding: 20px;
}

#wrapper_content {
    display: flex;
    align-items: center;
}


#wrapper_content img {
    width: 60%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
}

#wrapper_content_text{
    padding: 20px;
}

#wrapper_content_text h3{
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

#wrapper_content_text h3::before {
  content: "•"; /* You can replace this with any other decoration you want */
  margin-right: 0.5em;
}
</style>