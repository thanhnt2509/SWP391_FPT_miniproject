<template>
    <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>Account</a-breadcrumb-item>
      <a-breadcrumb-item>Bird</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
        <a-row type="flex" v-for="{ bird_id, bird_name, species, age, breed, gender, description } in data.birdList"
        :key="bird_id">
        <a-col flex="1 1 200px">
            <div class="birdlist">
                <a-descriptions :title="bird_name" class="each_bird">
                    <a-descriptions-item label="BirdName">{{ bird_name }}</a-descriptions-item>
                    <a-descriptions-item label="Species">{{ species }}</a-descriptions-item>
                    <a-descriptions-item label="Age">{{ ageConvert(age) }}</a-descriptions-item>
                    <a-descriptions-item label="Breed">{{ breed }}</a-descriptions-item>
                    <a-descriptions-item label="Gender">{{ gender }}</a-descriptions-item>
                    <a-descriptions-item label="Description">{{ description }}</a-descriptions-item>
                </a-descriptions>
            </div>
        </a-col>
        <a-col flex="0 1 100px">
            <a-button>EDIT</a-button>
        </a-col>
    </a-row>
    </a-layout-content>
  </a-layout>

    


</template>

<script setup>
import data from '../dum_data/Bird'
import { } from '@ant-design/icons-svg'

function ageConvert(age) {
    if (age >= 0 && age < 3) return 'Young'
    else if (age >= 3 && age <= 4) return 'Mature'
    else return 'Old'
}
</script>

<style scoped>
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
    text-align: justify;
    padding: 20px;
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