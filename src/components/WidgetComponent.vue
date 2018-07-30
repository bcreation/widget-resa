<template>
  <div :id="id" class="row">
    <div class="col">
      <NavTabs v-if="translation.tabs.length > 1" :tabs="translation.tabs" :activeTab="currentTabComponent" v-on:go-tab="goTab($event)"/>
      <div class="tab-content">
        <Component v-bind:is="currentTabComponent" :optsWidget="opts" :dev="dev" :test="test"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './NavTabs.vue'
import TicketingTab from './widget-tabs/TicketingTab'

export default {
  name: 'WidgetComponent',
  components: {
    NavTabs,
    TicketingTab,
  },
  props: ['id', 'opts', 'dev', 'test'],
  data() {
    return {
      translation: this.opts.translation[this.opts.language],
      tabs: this.opts.tabs,
      currentTabComponent: 'TicketingTab',
    }
  },
  methods: {
    /**
     * Return the current tabComponent name
     * @param {string} link / the link click by the user
     * @returns {string}
     */
    goTab(link) {
      this.currentTabComponent = link.replace('#', '')
    },
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, 
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
