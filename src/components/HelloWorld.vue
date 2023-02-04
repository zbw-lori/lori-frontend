<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Lori Dashboard</h1>

      <div class="py-10" />

      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-text-field :rules="rules" v-model="message" />
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            min-width="150"
            size="x-large"
            @click="check"
            :disabled="message.length == 0"
          >
            Send
            <v-icon icon="mdi-send-circle-outline" size="large" end />
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value || "").length <= 10 || "Max 10 characters",
      (value) => {
        const pattern = /^\w+$/;
        return pattern.test(value) || "Invalid message.";
      },
    ],
    message: "",
  }),
  methods: {
    async check() {
      console.log(`Checking your message.... ${this.message}`);

      await fetch("https://localhost:7169/api/Message", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.message),
      });

      this.message = "";
    },
  },
};
</script>
