<template>
    <div>
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>
  
<script>
import { Line } from 'vue-chartjs'
import Utils from './Utils'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, Colors } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, Colors)

const data = [
    { day: 2010, money: 10 },
    { day: 2011, money: 20 },
    { day: 2012, money: 15 },
    { day: 2013, money: 25 },
    { day: 2014, money: 22 },
    { day: 2015, money: 30 },
    { day: 2016, money: 28 },
];
const data2 = [
    { day: 2010, money: 27 },
    { day: 2011, money: 32 },
    { day: 2012, money: 60 },
    { day: 2013, money: 19 },
    { day: 2014, money: 22 },
    { day: 2015, money: 30 },
    { day: 2016, money: 29 },
];

export default {
    name: 'BarChart',
    components: { Line },
    data() {
        return {
            type: 'Line',
            data: data,
            chartOptions: {
                // animation: false,
                plugins: {
                    legend: {
                        position: 'top',
                        display: true
                    },
                    title: {
                        display: true,
                        text: 'Acquisitions by day'
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                responsive: true
            },
            chartData: {
                type: 'Line',
                labels: data.map(row => row.day),
                datasets: [
                    {
                        label: 'Acquisitions by day',
                        data: data.map(row => row.money),
                        borderColor: Utils.CHART_COLORS.red,
                        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                    },
                    {
                        label: 'Acquisitions by day',
                        data: data2.map(row => row.money),
                        borderColor: Utils.CHART_COLORS.blue,
                        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                    }
                ]
            }
        }
    }
}
</script>