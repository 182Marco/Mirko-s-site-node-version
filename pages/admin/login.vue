<template>
  <div class="box">
    <h1>Login</h1>
    <form @submit.prevent="handleSumbmit">
      <input
        @keyup.enter="goDown"
        v-model="name"
        type="text"
        placeholder="name"
      />
      <input ref="inputPsw" type="text" v-model="psw" placeholder="passsword" />
      <input
        @keyup.enter="signIn"
        type="text"
        v-model="test"
        placeholder="test"
      />
      <button>Login</button>
    </form>
  </div>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  name: "LoginPage",
  data() {
    return {
      name: '',
      psw: '',
      test: '',
    };
  },
  created() {
    console.log('porco dio',process.env.baseUrl)
  },
  methods: {
      async handleSumbmit() {
      try {
        const res = await this.$axios.post(
          '', {
            name: this.name,
            psw: this.psw,
            test: this.test,
          },
           {
          headers: {
              'Content-Type' : 'application/json; charset=UTF-8',
              'Accept': 'Token',
              "Access-Control-Allow-Origin": "*",
            }
          });
        console.log(`this is the fucking response: ${res.data}`)
      } catch (er) {
        console.error('this is the error: '+ er)
      }
    },
    goDown() {
      this.$refs["inputPsw"].focus();
    },
    signIn() {
      console.log(`I'm signing in`);
    },
  },
});
</script>

<style lang="scss">
@import "~/scss/globals";
@import "~/scss/mediaQueriesMixins";
@import "~/scss/vars";
@import "~/scss/utilityClasses";

h1 {
  margin: $page-margin-top 0 20px;
}
input {
  display: block;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
}
</style>
