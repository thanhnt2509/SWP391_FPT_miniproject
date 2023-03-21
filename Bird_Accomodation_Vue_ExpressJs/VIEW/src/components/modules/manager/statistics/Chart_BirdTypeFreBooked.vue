<template>
    <div>
        <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>
  
<script>
import { Doughnut } from 'vue-chartjs'
import Utils from './Utils'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement)

const res = await fetch('http://localhost:5000/statistics/bird-type-frequently-booked', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    }
})

const data = await res.json()

// const DATA_COUNT = 5;
// const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

export default {
    name: 'BarChart',
    components: { Doughnut },
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
                        text: 'Bird Type Frequently Booked'
                    }
                },
                responsive: true
            },
            chartData: {
                labels: data.map(row => row.bird_type_name),
                datasets: [
                    {
                        label: 'Bird Type Frequently Booked',
                        data: data.map(row => row.booking_count),
                        backgroundColor: Object.values(Utils.CHART_COLORS),
                    }
                ]
            }
        }
    }
}
</script>