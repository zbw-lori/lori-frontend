<template>
  <v-sheet color="accent" style="max-width: 680px; border-radius: 24px; padding: 120px 160px;">
    <v-img class="mx-auto" width="90" style="margin-bottom: 80px" src="@/assets/logo.svg" />

    <v-sheet class="mx-auto" color="transparent" style="max-width: 360px">
      <div class="text-h3 font-weight-bold text-white mb-5">Login</div>

      <v-form ref="form" @submit.prevent="login">
        <v-text-field v-model="email" label="Email" type="email" bg-color="white" required
          :rules="emailRules"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password" bg-color="white" required :rules="passwordRules"
          @keyup.enter.prevent></v-text-field>
        <v-btn block prepend-icon="mdi-lock" size="x-large" color="primary" type="submit">Login</v-btn>
      </v-form>

      <v-btn block size="small" variant="text" color="primary" class="mt-5">Forgot Password?</v-btn>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      emailRules: [v => !!v || 'Email is required'],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (!!v && this.valid) || 'Invalid Login'
      ]
    };
  },
  methods: {
    async login() {
      this.valid = true
      var user = {
        "username": this.email,
        "password": this.password
      }
      console.log(user)
      var response = await fetch("http://localhost:57679/api/v1/Auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      var json = await response.json();
      console.log(json)
      if (response.status == 200) {
        localStorage.setItem("jwt", json);
        this.$router.push('/dashboard')
      } else {
        this.valid = false
        await this.$refs.form.validate()
      }
    },

    async getMe() {
      var token = localStorage.getItem("jwt");
      console.log("Calling getMe()..." + token)
      if (token) {
        var response = await fetch("http://localhost:57679/api/v1/Auth", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status == 200) {
          this.$router.push('/dashboard')
        }
      }
    }
  },
  async created() {
    await this.getMe()
  }
};
</script>