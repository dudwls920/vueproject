<template>
  <div class="navbar-container main-menu-content">
    <horizontal-nav-menu-items :items="navMenuItems" />
  </div>
</template>

<script>
import HorizontalNavMenuItems from './components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue'

export default {
  components: {
    HorizontalNavMenuItems,
  },
  mounted() {
    // Shine VUE Starter Kit
    // const verticalMenus = this.$store.state.appNavigation
    const verticalMenus = [
      {
        header: 'Pages',
        icon: 'FileIcon',
        children: [
          {
            title: 'Home',
            route: 'home',
            icon: 'HomeIcon',
          },
          {
            title: 'Second Page',
            route: 'second-page',
            icon: 'FileIcon',
          },
        ],
      },
    ]
    const horizontalMenu = []
    let parent = {}
    for (let i = 0; i < verticalMenus.length; i += 1) {
      const temp = verticalMenus[i]
      parent = {
        header: temp.title,
        icon: temp.icon,
        route: temp.route,
        children: temp.children,
      }
      horizontalMenu[i] = parent
    }
    this.navMenuItems = horizontalMenu
  },
  setup() {
    return {
      navMenuItems: '',
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/horizontal-menu.scss";
</style>
