<template>
    <div class="no-active" :style="{ backgroundImage: `url(${service.image})` }">
        <!-- {{ service }} -->
        <div class="no-active-text columns">
            <p style="background-blend-mode: darken;" class="column is-four-fifths">{{ service.name }} </p>
            <!-- <i style="padding-top: 17px;" class="column fa-solid fa-maximize"></i> -->
        </div>

    </div>
</template>

<script>
export default {
    name: 'ServiceListItem',
    props: {
        service: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.no-active {
    height: 500px;
    background-size: cover;
    border-collapse: collapse;
}

.no-active-text {
    position: absolute;
    top: 830px;
    z-index: 1;
    width: 293px;
    text-align: center;
}

.no-active-text {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: x-large;
    color: #FFFFFF;
}
</style>