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
    robots: [
      {
        id: 1,
        name: "Robot1",
        description: "main robot",
        model: "123-X1",
        isAvailable: true,
      },
      {
        id: 2,
        name: "Robot2",
        description: "sample",
        model: "X43",
        isAvailable: false,
      },
      {
        id: 3,
        name: "Robot3",
        description: "mocking robot",
        model: "Mock-123",
        isAvailable: true,
      },
    ],
  }),

  async created() {
    var items = await this.onInit();
    if (items.length > 0) {
      this.robots = items;
    }
  },

  methods: {
    getRobot(id) {
      return this.robots.find(order => order.id == id);
    },

    async onInit() {
      console.log("init robots....")
      var response = await fetch(`http://localhost:57679/api/v1/Robot`, {
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
      await fetch(`http://localhost:57679/api/v1/Robot/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
      });
    },

    async onNew(item) {
      var response = await fetch(`http://localhost:57679/api/v1/Robot`, {
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
      await fetch(`http://localhost:57679/api/v1/Robot/${id}`, {
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