<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Stock Management</div>
    <v-container style="margin: 0px">
      <v-row justify="start">
        <CrudTable :headers="headers" :defaultItem="defaultOrder" v-model:dataItems="orders" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CrudTable from '@/components/CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    headers: [
      {
        title: 'Order',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Status', key: 'status' },
      { title: 'Priority', key: 'priority' },
      { title: 'Created', key: 'created' },
      { title: 'Type', key: 'receiptType' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultOrder: {
      id: 0,
      status: "",
      priority: "",
      created: "",
      receiptType: "auto",
    },
    orders: [
      {
        id: 1,
        status: "processing",
        priority: "high",
        created: "2023-05-27",
        receiptType: "auto",
      },
      {
        id: 2,
        status: "done",
        priority: "low",
        created: "2023-04-17",
        receiptType: "auto",
      },
      {
        id: 3,
        status: "delivery",
        priority: "high",
        created: "2023-02-11",
        receiptType: "auto",
      },
      {
        id: 4,
        status: "error",
        priority: "normal",
        created: "2023-04-20",
        receiptType: "manual",
      },
    ],
  }),
}
</script>