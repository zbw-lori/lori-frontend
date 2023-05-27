<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Robots</div>
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
    defaultOrder: {
      id: 0,
      name: "",
      description: "",
      model: "",
      // isAvailable: false,
    },
    orders: [
      {
        id: 1,
        name: "Robot1",
        description: "main robot",
        model: "123-X1",
        // isAvailable: true,
      },
      {
        id: 2,
        name: "Robot2",
        description: "sample",
        model: "X43",
        // isAvailable: false,
      },
      {
        id: 3,
        name: "Robot3",
        description: "mocking robot",
        model: "Mock-123",
        // isAvailable: true,
      },
    ],
  }),
}
</script>