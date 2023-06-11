<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Robots</div>
    <v-container style="margin: 0px">
      <v-row justify="start">
        <RobotTable />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RobotTable from '@/components/RobotTable.vue';

export default {
  components: {
    RobotTable,
  },
}
</script>