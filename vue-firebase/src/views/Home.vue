<template>
  <div class="mt-3">
    <div class="text-secondary text-center" v-if="user">
      Welcome back
      <span class="text-weight-bold text-info">{{ user }}</span>
      <a href="#" role="button" class="text-primary ml-2" @click="logout"
        >Logout</a
      >
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <div class="display-4 text-primary mb-2">
            Meeting Log
          </div>
          <p class="lead">
            This simple app creates meetings, allows people to check in, and
            picks random users to award giveaways. It's a good example of a
            Single Page Application which includes connection to a database and
            routing. It's a practical way to learn
            <a href="https://vuejs.org/">Vue.js</a> with
            <a href="https://firebase.google.com">Firebase</a>.
          </p>

          <router-link
            to="/register"
            class="btn btn-outline-primary mr-2"
            v-if="!user"
          >
            Register
          </router-link>
          <router-link
            to="/login"
            class="btn btn-outline-primary mr-2"
            v-if="!user"
          >
            Log In
          </router-link>
          <router-link to="/meetings" class="btn btn-primary" v-if="user">
            Meetings
          </router-link>
        </div>
        <!-- columns -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["user"],
  methods: {
    logout() {
      this.$emit("logout");
    }
  }
};
</script>
