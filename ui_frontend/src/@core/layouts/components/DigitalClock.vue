<template>
  <div>
    <p
      :id="clockSkin"
      :style="{
        fontSize:fontSize}"
    >
      {{ timeString }}
    </p>
  </div>

</template>

<script>

export default {
  props: {
    fontSize: String,
    skin: String,
  },
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      theme: 'digitalClock-Dark',
    }
  },
  computed: {
    clockSkin() {
      return this.skin === 'light' ? 'digitalClock-Light' : 'digitalClock-Dark'
    },
    timeString() {
      const second = this.second >= 10 ? this.second : `0${this.second}`
      const minute = this.minute >= 10 ? this.minute : `0${this.minute}`
      const hour = this.hour >= 10 ? this.hour : `0${this.hour}`
      return `${hour}:${minute}:${second}`
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

<style>
#digitalClock-Light,
#digitalClock-Dark {
  text-align: center;
  line-height: 1;
  display: inline-block;
  font-family: "digital";
  margin: 0px;
}

/* Light 1번 */
 /* #digitalClock-Light {
  color: #ffffff;
  text-shadow: 0 0 11px rgba(0, 0, 0, 1), 0 0 41px rgba(0, 0, 0, 1);
}
@keyframes neonAnim {
     from {
        text-shadow:
          0 0 11px rgba(0, 0, 0, 1),
          0 0 41px rgba(0, 0, 0, 1),
          0 0 101px rgba(0, 0, 0, 1);
      }
      to {
        text-shadow:
          0 0 6px rgba(0, 0, 0, 1),
          0 0 21px rgba(0, 0, 0, 1),
          0 0 61px rgba(0, 0, 0, 1);
      }
} */

/* Light 2번 */
/* #digitalClock-Light {
  color: #FF8F26;
} */

/* Dark 1번 */
/* #digitalClock-Dark {
  animation: neon_dark 2s ease-in-out infinite alternate;
  color: black;
}
@keyframes neon_dark {
 from {
        text-shadow:
          0 0 14px rgba(255, 255, 255, 1),
          0 0 44px rgba(255, 255, 255, 1),
          0 0 104px rgba(255, 255, 255, 1);
      }
      to {
        text-shadow:
          0 0 9px rgba(255, 255, 255, 1),
          0 0 24px rgba(255, 255, 255, 1),
          0 0 64px rgba(255, 255, 255, 1);
      }
} */

/* Dark 2번 */
/* #digitalClock-Dark {
  color: #c6e2ff;
} */

/* 3번 */
#digitalClock-Light {
  color: white;
  background: linear-gradient(90deg, rgb(105, 105, 105) 0%,rgb(161, 161, 161) 50%, rgb(105, 105, 105) 100%);
  padding: 3px 20px 3px 20px;
  border-radius: 10px;

}

#digitalClock-Dark {
  color: black;
  background: linear-gradient(90deg, rgb(163, 163, 163) 0%, rgb(255, 255, 255) 50%, rgb(163, 163, 163) 100%);
  padding: 3px 20px 3px 20px;
  border-radius: 10px;

}

@font-face {
    font-family: 'digital';
    font-style: normal;
    font-weight: 400;
    src: url(../../assets/fonts/feather/fonts/digital.ttf) format("truetype");
}

</style>
