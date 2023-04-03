<template>
  <v-container style="height: 100%">
    <v-row align="center" style="height: 100%">
      <v-col>
        <LoginForm />
      </v-col>
      <v-col>
        <v-img
          class="mx-auto mb-16"
          width="400"
          src="@/assets/login-amico.svg"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
</script>
