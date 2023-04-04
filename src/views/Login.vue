<template>
  <v-container style="height: 100%" fluid class="pa-16">
    <v-row align="center" style="height: 100%">
      <v-col>
        <login-form />
      </v-col>
      <v-col>
        <v-img
          class="mx-auto mb-16"
          width="50vh"
          src="@/assets/login-amico.svg"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LoginForm from "@/components/LoginForm.vue";
</script>
