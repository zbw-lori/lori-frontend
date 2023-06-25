<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Dashboard</div>
    <Chart chartType="line" :chartData="chartData" :chartOptions="chartOptions" />
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';

export default {
  components: {
    Chart,
  },

  data: () => ({
    chartData: {
      labels: ['100%', '100%', '100%', '100%', '90%', '90%', '90%', '90%', '90%', '90%', '80%', '80%', '80%', '80%', '80%', '80%', '80%', '80%', '80%', '80%'],
      datasets: [{
        label: 'Battery',
        data: [4.35, 4.25, 4.0, 3.95, 3.85, 3.82, 3.80, 3.77, 3.75, 3.75, 3.75, 3.75, 3.72, 3.70, 3.68, 3.66, 3.65, 3.65, 3.65, 3.65],
        borderWidth: 1,
        borderColor: '#D17077',
        backgroundColor: '#fff',
        tension: 0.1,
      }]
    },

    chartOptions: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  }),
}
</script>