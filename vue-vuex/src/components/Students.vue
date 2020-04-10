<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Students</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-item
          v-for="(student, i) in students"
          :key="i"
          :to="`/editStudent/${i}`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="student.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Students",
  computed: mapState({
    students: (state) => state.students
  }),
};
</script>
