<template>
  <CrudTable title="Route" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Route`,
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'RobotId', key: 'robotId' },
      { title: 'OrderId', key: 'orderId' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      id: 0,
      robotId: 0,
      orderId: 0,
    },
  }),
}
</script>