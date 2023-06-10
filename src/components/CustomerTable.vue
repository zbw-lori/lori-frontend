<template>
  <CrudTable title="Customer" :headers="headers" :defaultItem="defaultCustomer" v-model:dataItems="customers"
    @onNew="onNew" @onUpdate="onUpdate" @onDelete="onDelete" />
</template>

<script>
import CrudTable from './CrudTable.vue';

export default {
  components: {
    CrudTable
  },
  data: () => ({
    baseApiPath: import.meta.env.VITE_API_URL,
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
    customers: [],
  }),

  async created() {
    console.log(`Api Path: ${this.baseApiPath}`);
    this.customers = await this.onInit();
  },

  methods: {
    getCustomer(id) {
      return this.customers.find(customer => customer.id == id);
    },

    async onInit() {
      console.log("init customers....")
      var response = await fetch(`${this.baseApiPath}/Customer`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      var json = await response.json();
      console.log(json);
      return json;
    },

    async onUpdate(id) {
      var customer = this.getCustomer(id);
      console.log("Update Customer");
      console.log(JSON.stringify(customer));
      await fetch(`${this.baseApiPath}/Customer/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer)
      });
    },

    async onNew(item) {
      var response = await fetch(`${this.baseApiPath}/Customer`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
      });

      var json = await response.json();
      console.log(json);
      this.customers.push(json);
    },

    async onDelete(id) {
      await fetch(`${this.baseApiPath}/Customer/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
}
</script>