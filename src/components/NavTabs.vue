<template>
  <ul class="nav nav-tabs nav-justified">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
        <a class="nav-link" :class="{'active': isCurrent(tab.label), 'disabled': tab.disabled}" :href=tab.link role="tab" data-toggle="tab" @click.prevent="tab.disabled ? false :$emit('go-tab', tab.link)">
          {{tab.label}}
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'NavTabs',
  props: ['tabs', 'activeTab'],
  data() {
    return {}
  },
  methods: {
    /**
     * Return the active tab
     * @param {string} tab / the label of the tab
     * @returns {boolean}
     */
    isCurrent(tab) {
      return this.activeTab.replace('Tab', '') === tab
    },
  },
}
</script>

<style lang="scss">
</style>
