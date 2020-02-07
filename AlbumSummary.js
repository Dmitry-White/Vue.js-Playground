Vue.component('album-summary', {
  template: `
    <div>
      <transition name="fade">
        <h2 class="mt-5" v-cloak v-if="numSongs && showSummary">
          Songs:
          <span class="badge badge-secondary">{{numSongs}}</span>
        </h2>
      </transition>
      <custom-button type="button" extraClass="btn-info" :handler="summaryHandler">
        Summary
      </custom-button>
    </div>
  `,
  props: ['showSummary', 'summaryHandler', 'numSongs'],
});