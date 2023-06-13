<template>
  <v-app class="app">
    <v-navigation-drawer color="transparent" floating permanent class="pt-10 pl-10">
      <v-img class="mb-10" width="70" src="@/assets/logo.svg" />
      <v-list density="compact" nav class="pa-0" active-color="primary" variant="flat">
        <template v-for="link in links" :key="link.text">
          <v-list-item :to="link.route" :prepend-icon="link.icon" v-if="checkPermission(link.onlyAdmin)">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view class="main mt-10" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard', onlyAdmin: true },
        { icon: 'mdi-robot', text: 'Robots', route: '/robots', onlyAdmin: true },
        { icon: 'mdi-file-tree', text: 'Stock Management', route: '/stock', onlyAdmin: true },
        { icon: 'mdi-account-group', text: 'Customer Status', route: '/status', onlyAdmin: false }
      ]
    }
  },

  computed: {
    isAdmin() {
      return window.localStorage.getItem("user") === "admin";
    }
  },

  methods: {
    checkPermission(onlyAdmin) {
      if (onlyAdmin) {
        return this.isAdmin;
      }
      return !onlyAdmin;
    }
  }
}
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