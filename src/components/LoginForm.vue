<template>
  <v-sheet class="ma-auto pa-10" color="accent">
    <v-img class="mx-auto mb-16" width="90" src="@/assets/logo.svg" />

    <v-sheet class="mx-auto" color="transparent" style="max-width: 360px">
      <div class="text-h3 font-weight-bold text-white mb-5">Login</div>

      <v-form ref="form" @submit.prevent>
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          bg-color="white"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          bg-color="white"
        ></v-text-field>
        <v-btn block prepend-icon="mdi-lock" size="x-large" color="primary"
          >Login</v-btn
        >
      </v-form>

      <v-btn block size="small" variant="text" color="primary" class="mt-5"
        >Forgot Password?</v-btn
      >
    </v-sheet>
  </v-sheet>
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