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
      <custom-button type="submit" extraClass="btn-primary" :handler="process">
        Submit
      </custom-button>
    </form>
  `,
  props: ['process'],
  data: () => ({
    name: 'Hello World!',
    email: 'test@test.com',
  }),
});