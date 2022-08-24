<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>
    <!-- Left Col -->
    <b-navbar-nav class="nav align-items-center ">
      <!-- Bookmarks Container -->
      <bookmarks />
      <dark-Toggler
        class="d-none d-lg-block"
        @toggleSkin="toggleSkin"
      />
      <searchBar style="list-style:none" />
    </b-navbar-nav>

    <b-navbar-nav class="nav align-items-center ml-auto">

      <!-- clock -->
      <digital-clock
        font-size="25px"
        :skin="skin"
        style="margin-right: 30px;"
      />

      <!-- id="dropdown-grouped" -->
      <b-nav-item-dropdown
        id="lang"
        variant="link"
        class="dropdown-language"
        right
      >
        <template #button-content>
          <b-img
            :src="currentLocale.img"
            height="14px"
            width="22px"
            :alt="currentLocale.locale"
          />
          <span class="ml-50 text-body">{{ currentLocale.name }}</span>
        </template>
        <b-dropdown-item
          v-for="localeObj in locales"
          :key="localeObj.locale"
          @click="onLanguageClick"
        >
          <b-img
            :src="localeObj.img"
            height="14px"
            width="22px"
            :alt="localeObj.locale"
          />
          <span class="ml-50">{{ localeObj.name }}</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >

        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ userData.name }}
            </p>
            <span class="user-status">{{ userData.department }}</span>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="userData.picFilePath"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>
        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="logout"
        >
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
  // BDropdownDivider,
  BAvatar,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import auto from '@/auth'
import notify from 'devextreme/ui/notify'
import httpService from '@/service/httpService'
import apiConfig from '@/config/apiConfig'
import axios from 'axios'
// import { ref } from '@vue/composition-api'
import Bookmarks from '../../@core/layouts/components/app-navbar/components/Bookmarks.vue'
import SearchBar from '../../@core/layouts/components/app-navbar/components/SearchBar.vue'

import digitalClock from '../../@core/layouts/components/DigitalClock.vue'
// import searchAndBookmarkData from '../../@core/layouts/components/app-navbar/search-and-bookmark-data'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    // BDropdownDivider,
    BAvatar,
    Bookmarks,
    SearchBar,
    digitalClock,
    // Navbar Components
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      userData: {},
      skin: 'light',
      locale: '',
    }
  },
  computed: {
    currentLocale() {
      return this.locales.find(l => l.locale === this.$i18n.locale)
      // return window.sessionStorage.getItem('locale')
    },
  },
  async mounted() {
    // Shine VUE Starter Kit
    // this.userData = await this.$httpService.Get_Param('/api/user-info/profileImage', {
    //   params: {
    //     id: window.sessionStorage.getItem('userId'),
    //   },
    // })
    // this.locale = window.sessionStorage.getItem('locale')
  },
  methods: {
    logout() {
      auto.logOut()
      this.$router.push({ name: 'login' })
    },
    toggleSkin(e) {
      this.skin = e
    },
    async onLanguageClick(e) {
      let lang = ''
      if (e.target.outerText === 'Korean') {
        lang = 'KO'
      } else if (e.target.outerText === 'English') {
        lang = 'EN'
      }
      this.$i18n.locale = lang

      const result = await this.updateUserLang(lang)

      if (result.status) {
        const pathes = []
        this.findpathes(result.menus, pathes)

        this.$store.commit('setMenu', {
          menus: result.menus,
          pathes,
        })

        this.changeSearchLang()
      } else {
        notify(result.message, 'error', 2000)
      }
    },

    async updateUserLang(lang) {
      window.sessionStorage.setItem('locale', lang)
      return httpService.Post(apiConfig.API.USER.userDefineLanguage, {
        id: window.sessionStorage.getItem('userId'),
        lang,
      })
    },

    findpathes(items, pathes) {
      for (const item of items) {
        if (item.path != null) {
          pathes.push(item.path)
        }

        if (item.items != null) {
          this.findpathes(item.items, pathes)
        }
      }
    },

    async changeSearchLang() {
      // const searchAndBookmarkDataPages = ref(searchAndBookmarkData.pages)
      const temp = await axios.get('/api/user-favorites/user-bookmark', {
        params: {
          userId: window.sessionStorage.getItem('userId'),
        },
      })
      const dummy = {
        pages: {
          key: 'title',
          data: temp.data,
        },
        files: {
          key: 'file_name',
          data: [],
        },
        contacts: {
          key: 'name',
          data: [],
        },
      }

      // console.log('=====>', temp.data)
      // this.$store.commit('setSearchAndBookmarkData', { temp })
      // console.log(localStorage.getItem('searchBookmark'))
      // searchAndBookmarkDataPages.value.data = temp.data
      window.sessionStorage.setItem('mes_searchBookmark', JSON.stringify(dummy))
    },
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [
      {
        locale: 'EN',
        img: require('@/assets/images/en.png'),
        name: 'English',
      },
      {
        locale: 'KO',
        img: require('@/assets/images/ko.png'),
        name: 'Korean',
      },

    ]

    return {
      locales,
    }
    /* eslint-disable global-require */
  },
}
</script>
<style scoped>
@media screen and (max-width: 768px)  {
  #lang{
    display: none;
  }
}
#lang{
    margin-right: 10px;
}
@media screen and (min-width: 769px) {
  #dropDownLang {
    /* display: none; */
    visibility: none;
  }
}
</style>
