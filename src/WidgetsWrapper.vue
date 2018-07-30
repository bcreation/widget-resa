<template>
  <div id="widgets-wrapper" class="container-fluid">
    <!-- put here the widgets with id="widget-* (is important to have this syntaxe)"-->
    <WidgetComponent id="widget-1" :opts="opts ? opts[0] : {}" :dev="true" :test="true" />
  </div>
</template>

<script>
import WidgetComponent from './components/WidgetComponent.vue'

export default {
  name: 'widgets-wrapper',
  components: {
    WidgetComponent,
  },
  props: ['opts'],
  methods: {},
}
</script>
<style lang="scss">
/**
* Import your libraries behind
**/
@import './assets/sass/_variables.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
