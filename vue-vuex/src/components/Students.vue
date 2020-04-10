<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Students</v-toolbar-title>
      </v-toolbar>

      <v-container class="text-center" v-if="!isLoaded">
        <v-progress-circular :size="70" :width="7" color="gray" indeterminate />
      </v-container>

      <v-list v-if="isLoaded">
        <v-list-item
          v-for="(student, i) in students"
          :key="i"
          :to="`/editStudent/${i}`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="student.fullName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Students",
  computed: {
    ...mapGetters([
      'isLoaded',
      'students'
    ])
  },
};
</script>
