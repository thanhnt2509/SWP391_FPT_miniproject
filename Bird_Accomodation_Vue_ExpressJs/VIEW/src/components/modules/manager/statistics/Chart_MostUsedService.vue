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

const res = await fetch('http://localhost:5000/statistics/most-used-service', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    }
})

const data = await res.json()

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
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Most used service'
                    }
                },
                responsive: true
            },
            chartData: {
                labels: data.map(row => row.name),
                datasets: [
                    {
                        label: 'Most used service',
                        data: data.map(row => row.booking_count),
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