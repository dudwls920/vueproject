<template>
  <ul>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in navMenuItems"
      :key="item.header || item.title"
      :item="item"
    />
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  computed: {
    navMenuItems() {
      // Shine VUE Starter Kit
      return this.$store.state.appNavigation
      // return [
      //   {
      //     title: 'Home',
      //     route: 'home',
      //     icon: 'HomeIcon',
      //   },
      //   {
      //     title: 'Second Page',
      //     route: 'second-page',
      //     icon: 'FileIcon',
      //   },
      //   {
      //     title: 'New Module',
      //     route: 'new-module',
      //     icon: 'FileIcon',
      //     children: [
      //       {
      //         title: 'New First',
      //         route: '/new-first',
      //         icon: 'FileIcon',
      //       },
      //       {
      //         title: 'New Second',
      //         route: 'new-second',
      //         icon: 'FileIcon',
      //       },
      //       {
      //         title: 'New third',
      //         route: 'new-third',
      //         icon: 'FileIcon',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Next Module',
      //     route: 'next-module',
      //     icon: 'FileIcon',
      //   },
      // ]
    },
  },
  setup() {
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
}
</script>
