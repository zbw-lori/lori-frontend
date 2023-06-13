<template>
  <CrudTable title="OrderItem" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/OrderItem`,
    headers: [
      { title: 'OrderId', key: 'orderId' },
      { title: 'ItemId', key: 'itemId' },
      { title: 'Quantity', key: 'quantity' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      orderId: 0,
      itemId: 0,
      quantity: 0,
    },
  }),
}
</script>