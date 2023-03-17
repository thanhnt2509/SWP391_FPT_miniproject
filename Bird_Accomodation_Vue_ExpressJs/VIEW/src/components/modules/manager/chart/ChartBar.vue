<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
    { day: 2017, money: 33 },
    { day: 2018, money: 16 },
    { day: 2019, money: 72 },
    { day: 2020, money: 23 },
    { day: 2021, money: 20 },
    { day: 2022, money: 60 },
    { day: 2023, money: 79 },
]

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                type: 'Bar',
                labels: data.map(row => row.day),
                datasets: [
                    {
                        label: 'Acquisitions by day',
                        data: data.map(row => row.money)
                    },
                    {
                        label: 'Acquisitions by day',
                        data: data2.map(row => row.money)
                    },
                ]
            },
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
            }
        }
    }
}
</script>