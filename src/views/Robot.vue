<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Robots</div>
    <v-container style="margin: 0px">
      <v-row>
        <RobotTable />
      </v-row>
      <v-row>
        <RouteTable class="mt-2" />
      </v-row>
      <v-row>
        <FetchActions />
      </v-row>
      <v-row>
        <DriveActions />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RobotTable from '@/components/RobotTable.vue';
import RouteTable from '@/components/RouteTable.vue';
import FetchActions from '@/components/FetchActions.vue';
import DriveActions from '@/components/DriveActions.vue';

export default {
  components: {
    RobotTable,
    RouteTable,
    FetchActions,
    DriveActions,
  },
}
</script>