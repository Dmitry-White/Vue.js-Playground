Vue.component('album-summary', {
  template: `
    <div>
      <transition name="fade">
        <h2 class="mt-5" v-cloak v-if="numSongs && showSummary">
          Songs:
          <span class="badge badge-secondary">{{numSongs}}</span>
        </h2>
      </transition>
      <button type="button" class="btn btn-info" @click="summaryHandler">
        Summary
      </button>
    </div>
  `,
  props: ['showSummary', 'summaryHandler', 'numSongs'],
});