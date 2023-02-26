<template>
    <!-- eachbird -->
    <div>
        <!-- bird header -->
        <div>
            <h2>BirdName</h2>
            <button>Edit</button>
            <button>Delete</button>
        </div>

        <!-- bird image -->
        <div>
            Bird images goes here if exist
        </div>

        <!-- bird property -->
        <div>
            <ul>
                <li>Species: </li>
                <li>Age: </li>
                <li>Breed: </li>
                <li>Gender: </li>
                <li>Description: </li>
                <li>Status: <button disabled>On-service</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bird_Info',
    components: {

    }
}
</script>