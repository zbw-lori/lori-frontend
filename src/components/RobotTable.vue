<template>
  <CrudTable title="Robot" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Robot`,
    headers: [
      {
        title: 'Robot',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Name', key: 'name' },
      { title: 'Description', key: 'description' },
      { title: 'Model', key: 'model' },
      // { title: 'Available', key: 'isAvailable' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      id: 0,
      name: "",
      description: "",
      model: "",
      isAvailable: false,
    },
  }),
}
</script>