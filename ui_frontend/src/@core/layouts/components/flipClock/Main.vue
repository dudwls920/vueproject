<template>
  <div id="frame">
    <p id="timeString">
      <flip :value="hourString" />
      <span :class="separatorSkin">:</span>
      <flip :value="minuteString" />
      <span :class="separatorSkin">:</span>
      <flip :value="secondString" />
    </p>
  </div>
</template>

<script>
import Flip from './FlipCopy.vue'

export default {
  components: {
    Flip,
  },
  props: {
    skin: String,
  },
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
    }
  },
  computed: {
    separatorSkin() {
      return this.skin === 'light' ? 'separator-light' : 'separator-dark'
    },
    hourString() {
      return this.hour >= 10 ? this.hour : `0${this.hour}`
    },
    minuteString() {
      return this.minute >= 10 ? this.minute : `0${this.minute}`
    },
    secondString() {
      return this.second >= 10 ? this.second : `0${this.second}`
    },
  },
  mounted() {
    setInterval(() => {
      const date = new Date()
      this.hour = date.getHours()
      this.minute = date.getMinutes()
      this.second = date.getSeconds()
    }, 1000)
  },
}
</script>

<style scoped>
#frame{
    height: auto;

}
#timeString{
    margin: 0px;
}
.separator-light,
.separator-dark {
  font-size: 20px;
  font-weight: 600;
}
.separator-light {
  color: black;
}
.separator-dark {
  color: white;
}
</style>
