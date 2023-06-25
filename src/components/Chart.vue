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
      this.chart.data.labels.push("blue");
      var len = this.chart.data.datasets[0].data.length;
      this.chart.data.datasets[0].data[len] = 11;
      this.chart.update();
    }
  },
}
</script>