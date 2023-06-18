<template>
  <div style="background-color: white; border-radius: 10px; padding: 10px;">
    <canvas></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  props: {
    chartType: String,
    chartData: Object,
    chartOptions: Object,
  },

  mounted() {
    let { chartType, chartData, chartOptions } = this;
    this.initChart(chartType, chartData, chartOptions);
  },

  methods: {
    initChart(chartType, chartData, chartOptions) {
      const chartElement = document.querySelector("canvas");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions,
      });
    },
  },
}
</script>