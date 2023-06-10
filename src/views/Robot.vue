<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Robots</div>
    <v-container style="margin: 0px">
      <v-row justify="start">
        <CrudTable title="Robot" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" />
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