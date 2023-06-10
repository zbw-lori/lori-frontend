<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Stock Management</div>
    <v-container style="margin: 0;">
      <v-row>
        <OrderTable />
      </v-row>
      <v-row>
        <CustomerTable class="mt-2" />
      </v-row>
      <v-row>
        <AddressTable class="mt-2" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable.vue';
import CustomerTable from '@/components/CustomerTable.vue';
import AddressTable from '@/components/AddressTable.vue';

export default {
  components: {
    OrderTable,
    CustomerTable,
    AddressTable,
  },
}
</script>