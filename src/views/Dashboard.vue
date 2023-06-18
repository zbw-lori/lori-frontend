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
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Capacity',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: '#D17077',
        backgroundColor: '#fff',
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