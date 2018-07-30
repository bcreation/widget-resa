<template>
  <div id="widgets-wrapper" class="container-fluid">
    <!-- put here the widgets with id="widget-* (is important to have this syntaxe)"-->
    <WidgetComponent id="widget-1" :opts="opts ? opts[0] : {}" :dev="true" :test="true"/>
    <WidgetComponent id="widget-2" :opts="opts ? opts[1] : {}" :dev="true" :test="true"/>
    <!-- <WidgetComponent id="widget-2" :opts="opts ? opts[1] : {}" :dev="true"/> -->
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
</style>
