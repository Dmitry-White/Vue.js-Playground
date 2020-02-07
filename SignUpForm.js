Vue.component('sign-up-form', {
  template: `
    <form class="mt-5">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model:value="email"
          class="form-control form-control-lg"
        >
      </div>
      <button
        type="submit"
        @click="process"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  `,
  props: ['process'],
  data: () => ({
    name: 'Hello World!',
    email: 'test@test.com',
  }),
});