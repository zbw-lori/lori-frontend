<template>
  <CrudTable title="Order" :headers="headers" :defaultItem="defaultOrder" v-model:dataItems="orders" @onNew="onNew"
    @onUpdate="onUpdate" @onDelete="onDelete" />
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
      { title: 'Status', key: 'status' },
      { title: 'Priority', key: 'priority' },
      { title: 'Earliest', key: 'earliestDelivery' },
      { title: 'Latest', key: 'latestDelivery' },
      { title: 'Type', key: 'receiptType' },
      { title: 'CustomerId', key: 'customerId' },
      { title: 'Actions', key: 'actions', sortable: false },
    ],
    defaultOrder: {
      id: 0,
      status: "",
      priority: "",
      earliestDelivery: "",
      latestDelivery: "",
      receiptType: "auto",
      customerId: 0,
    },
    orders: [],
  }),

  async created() {
    console.log(`Api Path: ${this.baseApiPath}`);
    this.orders = await this.onInit();
  },

  methods: {
    getCustomer(id) {
      return this.orders.find(order => order.id == id);
    },

    async onInit() {
      console.log("init orders....")
      var response = await fetch(`${this.baseApiPath}/Order`, {
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
      console.log("Update Order");
      console.log(JSON.stringify(customer));
      await fetch(`${this.baseApiPath}/Order/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer)
      });
    },

    async onNew(item) {
      var response = await fetch(`${this.baseApiPath}/Order`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
      });

      var json = await response.json();
      console.log(json);
      this.orders.push(json);
    },

    async onDelete(id) {
      await fetch(`${this.baseApiPath}/Order/${id}`, {
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