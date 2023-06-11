<template>
  <CrudTable title="Store" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Store`,
    headers: [
      { title: 'Id', key: 'id' },
      { title: 'Name', key: 'name' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      id: 0,
      name: "",
    },
  }),
}
</script>