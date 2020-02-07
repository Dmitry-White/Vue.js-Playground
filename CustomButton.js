Vue.component('custom-button', {
  template: `
    <button
      :type="type"
      @click="handler"
      class="btn"
      :class="extraClass"
    >
      <slot></slot>
    </button>
  `,
  props: ['type', 'handler', 'extraClass'],
});