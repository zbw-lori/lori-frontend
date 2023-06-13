<template>
  <CrudTable title="Item" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" @onNew="onNew"
    @onUpdate="onUpdate" @onDelete="onDelete" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Item`,
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Name', key: 'name' },
      { title: 'Price', key: 'price' },
      { title: 'StockQuantity', key: 'stockQuantity' },
      { title: 'StoreId', key: 'storeId' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      id: 0,
      name: "",
      price: 0.0,
      stockQuantity: 0,
      storeId: 0,
    },
  }),
}
</script>