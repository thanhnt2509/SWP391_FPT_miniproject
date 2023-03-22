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

const res = await fetch('http://localhost:5000/statistics/transaction/number-booking-status', {
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
                        text: 'Number booking by status'
                    }
                },
                scales: {
                    r: {
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 18
                            }
                        }
                    },
                },
                responsive: true
            },
            chartData: {
                labels: data.map(row => {
                    if(row.status == 0) return 'Pending'
                    if(row.status == 1) return 'Approved'
                    if(row.status == 2) return 'Rejected'
                    if(row.status == 3) return 'Completed'
                    if(row.status == 4) return 'Cancelled'
                }),
                datasets: [
                    {
                        label: 'Number booking by status',
                        data: data.map(row => row.total_booking),
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