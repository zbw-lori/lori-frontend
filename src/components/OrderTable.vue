<template>
  <CrudTable title="Order" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Order`,
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Status', key: 'status' },
      { title: 'Priority', key: 'priority' },
      { title: 'Earliest', key: 'earliestDelivery' },
      { title: 'Latest', key: 'latestDelivery' },
      { title: 'Type', key: 'receiptType' },
      { title: 'CustomerId', key: 'customerId' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      id: 0,
      status: "",
      priority: "",
      earliestDelivery: "",
      latestDelivery: "",
      receiptType: "auto",
      customerId: 0,
    },
  }),
}
</script>