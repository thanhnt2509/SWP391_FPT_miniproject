<template>
    <div>
        <PolarArea id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>
  
<script>
import { PolarArea } from 'vue-chartjs'
import Utils from './Utils'
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale)

const data = [
    { day: 2010, money: 10 },
    { day: 2011, money: 20 },
    { day: 2012, money: 15 },
    { day: 2013, money: 25 },
    { day: 2014, money: 70 },
];
// const DATA_COUNT = 5;
// const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

export default {
    name: 'BarChart',
    components: { PolarArea },
    data() {
        return {
            chartOptions: {
                // animation: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Acquisitions by day'
                    }
                },
                responsive: true
            },
            chartData: {
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                datasets: [
                    {
                        label: 'Acquisitions by day',
                        data: data.map(row => row.money),
                        backgroundColor: [
                            Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                            Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
                            Utils.transparentize(Utils.CHART_COLORS.yellow, 0.5),
                            Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
                            Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                        ],
                    }
                ]
            }
        }
    }
}
</script>