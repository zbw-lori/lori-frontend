<template>
  <v-app class="app">
    <v-navigation-drawer color="transparent" floating permanent class="pt-10 pl-10">
      <v-list density="compact" nav class="pa-0" active-color="primary" variant="flat">
        <v-list-item class="pt-0" style="background-color: transparent"><v-img class="mb-5" width="70"
            src="@/assets/logo.svg" /></v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-robot" title="Robots" value="robots"></v-list-item>
        <v-list-item prepend-icon="mdi-file-tree" title="Stock Management" value="stock"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="Customer Status" value="status"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view class="main mt-10" />
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.app {
  background: linear-gradient(112.52deg,
      #25303e -3.84%,
      #25303e 52.41%,
      #712f2e 100%);
}

.main {
  background: rgba(240, 240, 240, 0.1);
}
</style>