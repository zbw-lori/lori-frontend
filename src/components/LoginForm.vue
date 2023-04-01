<template>
  <v-card class="mx-auto" style="max-width: 680px" color="accent">
    <v-card-title>
      <v-img class="mx-auto" width="90" src="@/assets/logo.svg"
    /></v-card-title>

    <v-card-text style="max-width: 360px" class="mx-auto">
      <div class="text-h3 font-weight-bold text-white">Login</div>

      <v-form ref="form" @submit.prevent>
        <v-text-field v-model="email" label="Email" type="email"></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
        ></v-text-field>
        <v-btn block prepend-icon="mdi-lock" size="x-large" color="primary"
          >Login</v-btn
        >
      </v-form>

      <v-btn block size="small" variant="text" color="primary"
        >Forgot Password?</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>