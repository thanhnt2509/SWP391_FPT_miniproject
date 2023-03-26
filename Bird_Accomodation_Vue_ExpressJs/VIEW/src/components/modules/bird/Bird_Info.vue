<template>
    <!-- eachbird -->
    <div class="bird">
        <!-- bird header -->
        <div class="bird_name">
            <h1>{{ bird?.bird_name || '' }}</h1>
            <span class="bird_action">
                <i v-if="!noAction" class="fa-solid fa-pen"></i>
                <i v-if="!noAction" class="fa-regular fa-trash-can"></i>
            </span>
        </div>

        <div class="bird_flex">
            <!-- bird image -->
            <div class="bird_img">
                <img :src="`http://localhost:5000/file/get_bird_img/${bird?.image}`" alt="bird image goes here">
            </div>

            <!-- bird property -->
            <div class="bird_info">
                <table class="table is-fullwidth">
                    <tr>
                        <td>Species</td>
                        <td>{{ bird?.type_name || '' }}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{{ ageType[bird?.age - 1] || '' }}</td>
                    </tr>
                    <tr>
                        <td>Breed</td>
                        <td>{{ bird?.breed || '' }}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{{ bird?.gender === 1 ? 'Male' : 'Female' || '' }}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{{ bird?.description || '' }}</td>
                    </tr>
                    <tr>
                        <td>Boarding</td>
                        <td>
                            <a-tag style="padding: 5px 20px; border-radius: 20px;" v-if="bird?.is_boarding"
                                color="blue">Boarding</a-tag>
                            <a-tag style="padding: 5px 20px; border-radius: 20px;" v-else color="red">Not Boarding</a-tag>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bird_Info',
    data() {
        return {
            ageType: [
                'Baby',
                'Young',
                'Mature',
            ]
        }
    },
    computed: {
        // ...mapGetters(['getBirds', 'birdTypeItems'])
    },
    props: {
        bird: {
            type: Object,
            // required: true
        },
        noAction: String,
        resize_width: String,
        main: Boolean
    },
}
</script>
<style scoped>
.bird {
    width: 100%;
    border: 1px solid #e6e6e6;
    padding: 20px;
}

.bird_name {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.bird_name h1 {
    font-weight: 600;
}

.bird_name .bird_action i{
    font-size: 1.5rem;
    margin-right: 20px;
}

.bird_img{
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.bird_img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

table tr:last-child td{
    border: unset;
}
</style>