<template>
    <div>
        <h1>Register new bird</h1>
        <div>
            <label>Name</label>
            <input type="tel" placeholder="Typhoon">
        </div>

        <div>
            <label>Species</label>
            <select>
                <!-- list of bird_type -->
                <option disabled>Select bird type</option>
                <option>Ostrich</option>
                <option>Eagle</option>
                <option>Ostrich</option>
                <option>Eagle</option>
                <option>Ostrich</option>
                <option>Eagle</option>
            </select>
        </div>

        <div>
            <label>Age</label>
            <select>
                <!-- list of bird_age -->
                <option disabled>Select bird age</option>
                <option>Young</option>
                <option>Mature</option>
                <option>Old</option>
            </select>
        </div>

        <div>
            <label>Gender</label>
            <input type="radio" name="gender">Male
            <input type="radio" name="gender">Female

        </div>

        <div>
            <label>Breed</label>
            <input type="text" placeholder="peace face, blue tail">
        </div>


        <div>
            <button type="submit">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Birdregister'
}
</script>