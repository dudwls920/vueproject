<template>
  <b-nav-item @click="clicked">
    <feather-icon
      size="21"
      :icon="`${isDark ? 'Sun' : 'Moon'}Icon`"
    />
  </b-nav-item>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import { computed } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'
import store from '@/store'

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig()

    const isDark = computed(() => skin.value === 'dark')

    return { skin, isDark }
  },
  methods: {
    clicked() {
      this.skin = this.isDark ? 'light' : 'dark'
      this.$emit('toggleSkin', this.skin)
      store.commit('setSkin', this.skin)
    },
  },
}
</script>
