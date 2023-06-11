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
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.receiptType }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Order/status`,
    items: [],
  }),

  async created() {
    await this.callInit();
  },

  methods: {
    async callInit() {
      console.log(`Get status -> ${this.apiPath}`);
      var jwt = localStorage.getItem("jwt");
      var response = await fetch(`${this.apiPath}`, {
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
    },
  }
}
</script>