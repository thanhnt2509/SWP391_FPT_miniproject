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

const res = await fetch('http://localhost:5000/statistics/transaction/number-bill-status', {
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
                    },
                    title: {
                        display: true,
                        text: 'Most selected payment method'
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
                    if(row.payment_method == 0) return 'Cash'
                    if(row.payment_method == 1) return 'Wallet'
                    if(row.payment_method == 2) return 'Credit card'
                }),
                datasets: [
                    {
                        label: 'Most selected payment method',
                        data: data.map(row => row.total_bill),
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