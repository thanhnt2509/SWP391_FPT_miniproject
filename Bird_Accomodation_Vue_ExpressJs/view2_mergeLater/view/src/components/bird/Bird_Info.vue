<template>
    <!-- eachbird -->
    <div>
        <!-- bird header -->
        <div>
            <h2>Name: {{ bird.bird_name }}</h2>
            <div v-if="!noAction">
                <button>Edit</button>
                <button>Delete</button>
            </div>

        </div>

        <!-- bird image -->
        <div>
            <img :src="bird.image" alt="bird image goes here">
        </div>

        <!-- bird property -->
        <div>
            <ul>
                <li>Species: {{ speciesType[bird.type_id] }}</li>
                <li>Age: {{ ageType[bird.age] }}</li>
                <li>Breed: {{ bird.breed }}</li>
                <li>Gender: {{ bird.gender }}</li>
                <li>Description: {{ bird.description }}</li>
                <!-- <li>Status: <button disabled>On-service</button></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bird_Info',
    data() {
        return {
            speciesType: [
                'Parrot',
                'Parakeet',
                'Lovebird',
                'Finch',
                'Canary',
                'Cockatiel',
                'Other'
            ],
            ageType: [
                'Baby',
                'Young',
                'Mature',
            ]
        }
    },
    props: {
        bird: {
            type: Object,
            required: true
        },
        noAction: Boolean
    },
}
</script>