<template>
  <CrudTable title="Customer" :headers="headers" :defaultItem="defaultCustomer" :apiPath="apiPath" @onNew="onNew"
    @onUpdate="onUpdate" @onDelete="onDelete" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Customer`,
    headers: [
      {
        title: 'Id',
        align: 'start',
        sortable: false,
        key: 'id',
      },
      { title: 'Forename', key: 'forename' },
      { title: 'Surename', key: 'surename' },
      { title: 'Email', key: 'email' },
      { title: 'Phone', key: 'phone' },
      { title: 'AddressId', key: 'addressId' },
      { title: 'Username', key: 'username' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultCustomer: {
      id: 0,
      forename: "",
      surename: "",
      email: "",
      phone: "",
      addressId: 0,
      username: "",
    },
  }),
}
</script>