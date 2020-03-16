<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field label="New Message" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn @click="() => {}">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "NewMessage",
  data: () => ({}),
};
</script>

<style></style>
