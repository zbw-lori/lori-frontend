<template>
  <v-container style="margin: 0px; padding-left: 0;">
    <div class="text-h5 font-weight-bold text-white mb-2">Fetch</div>
    <v-row justify="start" align="center">
      <v-col cols="auto">
        <!-- <v-select label="Package Number" v-model="packageNumber" :items="[1, 2, 3, 4]" color="primary"></v-select> -->
        <v-text-field label="Package Number" v-model="packageNumber" variant="underlined"
          style="min-width: 140px; color: white;"></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="onGrab">Grab</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="onStore">Store</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="onDeliver">Deliver</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Mqtt`,
    robotId: 2,
    packageNumber: 0,
  }),

  methods: {
    async onGrab() {
      console.log("Send grab message to robot!");
      await this.callApi(`/package/grab/${this.robotId}`);
    },

    async onStore() {
      console.log("Send store message to robot!");
      await this.callApi(`/package/store/${this.robotId}`);
    },

    async onDeliver() {
      console.log("Send deliver message to robot!");
      await this.callApi(`/package/deliver/${this.robotId}`);
    },

    async callApi(subpath) {
      var api = `${this.apiPath}${subpath}?package=${this.packageNumber}`;
      console.log(`Call api ${api}`);
      await fetch(`${api}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    },
  },
}
</script>