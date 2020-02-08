<template>
  <form class="mt-5">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        v-model="email"
        class="form-control form-control-lg"
      />
    </div>
    <CustomButton type="submit" extraClass="btn-primary" :handler="process">
      Submit
    </CustomButton>
  </form>
</template>

<script>
import CustomButton from "./CustomButton";

const SignUpForm = {
  props: ["process"],
  components: { CustomButton },
  data: () => ({ name: "Hello World!", email: "test@test.com" })
};

export default SignUpForm;
</script>
