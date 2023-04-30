<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Stock Management</div>
    <v-container style="margin: 0px">
      <v-row justify="start">
        <CrudTable />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CrudTable from '@/components/CrudTable.vue';

export default {
  components: {
    CrudTable
  }
}
</script>