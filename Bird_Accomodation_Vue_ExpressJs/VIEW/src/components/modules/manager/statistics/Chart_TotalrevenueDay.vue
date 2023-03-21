<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import Utils from './Utils'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const res = await fetch('http://localhost:5000/statistics/total-revenue/day', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    }
})

const data = await res.json()

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                type: 'Bar',
                labels: data.map(row => row.checkout_date),
                datasets: [
                    {
                        label: 'Acquisitions by day',
                        data: data.map(row => row.total_revenue),
                        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
                    },
                ],
                
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
    },
}
</script>