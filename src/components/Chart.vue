<template>
  <div style="background-color: white; border-radius: 10px; padding: 10px;">
    <canvas ref="chartCtx"></canvas>
    <v-btn color="primary" @click="updateData">Update</v-btn>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { markRaw } from "vue";

export default {
  emits: ['test-click'],
  props: {
    chartType: String,
    chartData: Object,
    chartOptions: Object,
  },

  data: () => ({
    chart: null,
  }),

  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  },

  mounted() {
    let { chartType, chartData, chartOptions } = this;
    this.initChart(chartType, chartData, chartOptions);
  },

  methods: {
    initChart(chartType, chartData, chartOptions) {
      const chart = new Chart(this.$refs.chartCtx, {
        type: chartType,
        data: chartData,
        options: chartOptions,
      });
      this.chart = markRaw(chart);
    },

    updateData() {
      console.log(`update data`)
      console.log(this.chart)
      var len = this.chart.data.datasets[0].data.length;
      var pervious = this.chart.data.datasets[0].data[len - 1];
      var percentage = pervious < 3.60 ? (pervious < 3.55 ? (pervious < 3.5 ? '20%' : '40%') : '60%') : '80%';
      this.chart.data.labels.push(percentage);
      this.chart.data.datasets[0].data[len] = pervious - 0.005;
      this.chart.update();
    }
  },
}
</script>