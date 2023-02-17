<template>
    <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>Account</a-breadcrumb-item>
      <a-breadcrumb-item>Bird</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <h2 class="text_center xxlarge">Bird List</h2>
        <a-row class="bird_row" type="flex" v-for="{ bird_id, bird_name, type_id, age, breed, gender, description } in birdData"
        :key="bird_id">
        <a-col flex="1 1 200px">
            <div class="birdlist">
                <a-descriptions :title="bird_name" class="each_bird">
                    <a-descriptions-item label="BirdName">{{ bird_name }}</a-descriptions-item>
                    <a-descriptions-item label="Species"> {{  }}</a-descriptions-item>
                    <a-descriptions-item label="Age">{{ ageConvert(age) }}</a-descriptions-item>
                    <a-descriptions-item label="Breed">{{ breed }}</a-descriptions-item>
                    <a-descriptions-item label="Gender">{{ gender }}</a-descriptions-item>
                    <a-descriptions-item label="Description">{{ description }}</a-descriptions-item>
                </a-descriptions>
            </div>
        </a-col>
        <a-col flex="0 1 100px">
            <a-button class="btn">EDIT</a-button>
            <a-button class="btn" danger>DELETE</a-button>
        </a-col>
    </a-row>
    </a-layout-content>

    <!-- <a-button class="btn_register" type="primary"><RouterLink to="">Register new Bird</RouterLink></a-button> -->
  </a-layout>

    


</template>

<script setup>
import { ref, onMounted } from 'vue'
import userM from '../module/user_M'
const birdData = ref([])


function ageConvert(age) {
    return (age >= 1 && age <= 3 ? 'Young' : age == 4 ? 'Mature' : 'Old')
}

onMounted(async () => {
    birdData.value = await userM.getAllBirdOfUser(2)
})
</script>

<style scoped>
.btn{
    width: 100px;
    margin-top: 20px;
}
.btn_register{
    margin-top: 20px;
    width: 200px;
    margin-left: 40%;
}
.bird_row{
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
    box-shadow: 10px 10px rgb(129, 124, 124);
    border-radius: 20px;

    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    padding: 20px;
}
.box_sizing {
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    font-size: large;
}

.text_center {
    text-align: center;
}

.xxlarge {
    font-size: xx-large;
}

.content {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    padding: 20px;
    text-align: justify;
}

.eachBird {
    border: 1px solid black;
    padding: 0px 20px 20px 20px;
    margin: 20px 20px;
}

.eachBird_img img {
    width: 100%;
    height: 100%;
}

.eachBird_content {}

.eachBird_content_action_bar {}

.eachBird_content_text {}
</style>