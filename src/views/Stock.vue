<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Stock Management</div>
    <v-container style="margin: 0px">
      <v-row>
        <OrderTable />
      </v-row>
      <v-row>
        <CustomerTable />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable.vue';
import CustomerTable from '@/components/CustomerTable.vue';

export default {
  components: {
    OrderTable,
    CustomerTable
  },
}
</script>