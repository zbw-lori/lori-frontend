<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Stock Management</div>
    <v-container style="margin: 0;">
      <v-row>
        <AddressTable />
      </v-row>
      <v-row>
        <CustomerTable class="mt-2" />
      </v-row>
      <v-row>
        <OrderTable class="mt-2" />
      </v-row>
      <v-row>
        <ItemTable class="mt-2" />
      </v-row>
      <v-row>
        <OrderItemTable class="mt-2" />
      </v-row>
      <v-row>
        <StoreTable class="mt-2" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrderTable from '@/components/OrderTable.vue';
import CustomerTable from '@/components/CustomerTable.vue';
import AddressTable from '@/components/AddressTable.vue';
import ItemTable from '@/components/ItemTable.vue';
import OrderItemTable from '@/components/OrderItemTable.vue';
import StoreTable from '@/components/StoreTable.vue';

export default {
  components: {
    OrderTable,
    CustomerTable,
    AddressTable,
    ItemTable,
    OrderItemTable,
    StoreTable,
  },
}
</script>