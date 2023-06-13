<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Customer Status</div>
    <v-container style="margin: 0px; padding: 0;">
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">
              Id
            </th>
            <th class="text-left">
              Status
            </th>
            <th class="text-left">
              Receipt Type
            </th>
            <th class="text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.receiptType }}</td>
            <td v-if="item.receiptType === 'Manual'">
              <v-btn color="primary" @click="confirmOrder(item.id)">Confirm</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    statusApiPath: `${import.meta.env.VITE_API_URL}/Order/status`,
    confirmApiPath: `${import.meta.env.VITE_API_URL}/Mqtt/confirm`,
    items: [],
    intervalId: 0,
  }),

  async created() {
    this.intervalId = setInterval(async () => {
      await this.callInit();
    }, 1000);
  },

  beforeUnmount() {
    console.log("Unmount: Clear interval!");
    clearInterval(this.intervalId);
  },

  methods: {
    async callInit() {
      console.log(`Get status -> ${this.statusApiPath}`);
      var jwt = localStorage.getItem("jwt");
      try {
        var response = await fetch(`${this.statusApiPath}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });
        var json = await response.json();
        console.log(json);
        this.items = json;
      } catch (error) {
        clearInterval(this.intervalId);
      }
    },

    async confirmOrder(id) {
      console.log(`Confirm order -> ${this.confirmApiPath}/${id}`);
      await fetch(`${this.confirmApiPath}/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
    },
  }
}
</script>