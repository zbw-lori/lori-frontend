<template>
  <CrudTable title="Address" :headers="headers" :defaultItem="defaultItem" :apiPath="apiPath" @onNew="onNew"
    @onUpdate="onUpdate" @onDelete="onDelete" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Address`,
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Street', key: 'street' },
      { title: 'StreetNumber', key: 'streetNumber' },
      { title: 'City', key: 'city' },
      { title: 'CityCode', key: 'cityCode' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultItem: {
      id: 0,
      street: "",
      streetNumber: 0,
      city: "",
      cityCode: 0,
    },
  }),
}
</script>