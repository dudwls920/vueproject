<template>
  <div
    ref="tick"
    class="tick"
  >
    <div
      data-repeat="true"
      aria-hidden="true"
    >
      <span data-view="flip" />
    </div>
  </div>
</template>

<script>
import Tick from '@pqina/flip'
import '@/assets/clock/flip.css'

export default {
  name: 'Flip',
  props: ['value'],
  watch: {
    value(newValue) {
      this.tick.value = newValue
    },
  },
  mounted() {
    this.tick = Tick.DOM.create(this.$refs.tick, {
      value: this.$options.propsData.value,
    })
  },
  destroyed() {
    Tick.DOM.destroy(this.$refs.tick)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tick {
  font-size: 20px;
  font-family: 'digital';
  display: inline-block;
  -webkit-box-shadow: 2px 2px 14px -1px #FF9445;
  box-shadow: 2px 2px 14px -1px #FF9445;
}

@font-face {
    font-family: 'digital';
    font-style: normal;
    font-weight: 400;
    src: url(../../../assets/fonts/feather/fonts/digital.ttf) format("truetype");
}
</style>
