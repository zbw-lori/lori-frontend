<template>
  <div class="ma-5" style="min-height: 900px; border-radius: 24px; padding: 80px">
    <div class="text-h3 font-weight-bold text-white mb-5">Robots</div>
    <v-container style="margin: 0px">
      <v-row justify="start">
        <CrudTable :headers="headers" :defaultItem="defaultRobot" v-model:dataItems="robots" @onNew="onNew"
          @onUpdate="onUpdate" @onDelete="onDelete" />
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
    baseApiPath: import.meta.env.VITE_API_URL,
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
    defaultRobot: {
      id: 0,
      name: "",
      description: "",
      model: "",
      isAvailable: false,
    },
    robots: [],
  }),

  async created() {
    console.log(`Api Path: ${this.baseApiPath}`);
    this.robots = await this.onInit();
  },

  methods: {
    getRobot(id) {
      return this.robots.find(order => order.id == id);
    },

    async onInit() {
      console.log("init robots....")
      var response = await fetch(`${this.baseApiPath}/Robot`, {
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
      var order = this.getRobot(id);
      console.log("Update Order");
      console.log(JSON.stringify(order));
      await fetch(`${this.baseApiPath}/Robot/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
      });
    },

    async onNew(item) {
      var response = await fetch(`${this.baseApiPath}/Robot`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
      });

      var json = await response.json();
      console.log(json);
      this.robots.push(json);
    },

    async onDelete(id) {
      await fetch(`${this.baseApiPath}/Robot/${id}`, {
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