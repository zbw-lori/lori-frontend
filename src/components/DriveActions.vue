<template>
  <v-container style="margin: 0px; padding-left: 0;">
    <div class="text-h5 font-weight-bold text-white mb-2">Drive</div>
    <v-row justify="start" align="center">
      <v-col cols="auto">
        <v-text-field label="Package Number" v-model="packageNumber" variant="underlined"
          style="min-width: 140px; color: white;"></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="driveToStore">To Store</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="storePackage">Store Package</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="driveToPackage">To Package</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="driveToCustomer">To Customer</v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="driveToStart">To Start</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    apiPath: `${import.meta.env.VITE_API_URL}/Mqtt`,
    robotId: 1,
    packageNumber: 0,
  }),

  methods: {
    async driveToStore() {
      console.log("Send driveToStore message to robot!");
      await this.callApi(`/drive/store/${this.robotId}`);
    },

    async storePackage() {
      console.log("Send storePackage message to robot!");
      await this.callApi(`/package/store/${this.robotId}?package=${this.packageNumber}`);
    },

    async driveToPackage() {
      console.log("Send driveToPackage message to robot!");
      await this.callApi(`/drive/package/${this.robotId}?package=${this.packageNumber}`);
    },

    async driveToCustomer() {
      console.log("Send driveToCustomer message to robot!");
      await this.callApi(`/drive/customer/${this.robotId}?customer=${this.packageNumber}`);
    },

    async driveToStart() {
      console.log("Send driveToStart message to robot!");
      await this.callApi(`/drive/start/${this.robotId}`);
    },

    async callApi(subpath) {
      var api = `${this.apiPath}${subpath}`;
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