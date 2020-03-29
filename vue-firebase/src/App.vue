<template>
  <div id="app">
    <Navigation />
    <router-view class="container" :user="user" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import db from "@/db";

export default {
  name: "App",
  data: () => ({
    user: null,
  }),
  mounted() {
    db.collection("users")
      .doc("l1ImCfNOm79zD0V7gkTa")
      .get()
      .then((res) => {
        this.user = res.data().name;
      })
      .catch((err) => console.log(err));
  },
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
