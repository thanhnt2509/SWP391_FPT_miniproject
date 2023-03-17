<template>
    <div>
        <div class="container content">
            <h1 class="label has-text-centered">Dashboard</h1>
            <div class="columns is-multiline">
                <!--  is-two-thirds -->
                <div class="column is-6">
                    <ChartBar />
                </div>
                <div class="column is-6">
                    <VerticalBar />
                </div>
                <div class="column is-6">
                    <ChartLine />
                </div>
                <div class="column is-6">
                    <Doughnut />
                </div>
                <div class="column is-6">
                    <PolarArea />
                </div>
                <div class="column is-6">
                    <PolarArea_labelCenter />
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import ChartBar from './chart/ChartBar.vue'
import VerticalBar from './chart/VerticalBar.vue';
import ChartLine from './chart/ChartLine.vue'
import Doughnut from './chart/Doughnut.vue';
import PolarArea from './chart/PolarArea.vue';
import PolarArea_labelCenter from './chart/PolarArea_labelCenter.vue';
export default {
    name: "Manager_Dashboard",
    components: {
        ChartBar,
        VerticalBar,
        ChartLine,
        Doughnut,
        PolarArea,
        PolarArea_labelCenter
    },
}
</script>