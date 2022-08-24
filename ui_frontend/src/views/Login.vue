<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img
          id="shineLogo"
          src="@/assets/images/logo/shine.svg"
        >
        <h2 class="brand-text text-primary ml-1">
          Shine UI
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        id="imageWrapper"
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Welcome to Shine UI Starter Kit! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent
            >
              <b-form-group
                label="ID"
                label-for="username"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Username"
                  rules="required"
                >
                  <b-form-input
                    id="username"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Username"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
                      @keyup="changeText"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small
                    class="text-danger"
                  >{{ errors[0] }}</small>
                  <small
                    v-if="loginError == false && errors[0] == undefined"
                    class="text-danger"
                  >
                    * 아이디 혹은 비밀번호 오류</small>
                  <!-- {{ loginError }}</small> -->
                  <small v-else />
                </validation-provider>
              </b-form-group>

              <b-button
                id="signInButton"
                type="submit"
                variant="primary"
                block
                @click="validationForm"
              >
                Sign in
              </b-button>
            </b-form>
          </validation-observer>

          <!-- /Login-->
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BCardText, BCardTitle, BImg, BForm, BButton,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

import navigation from '../navigation/vertical'
// import store from '@/store/index'
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

// Shine VUE Starter Kit
// import auth from '@/auth'

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    // BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: '',
      userEmail: '',
      sideImg: require('@/assets/images/login.jpg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
      loginError: true,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      // if (store.state.appConfig.layout.skin === 'dark') {
      //   // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      //   this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
      //   return this.sideImg
      // }
      return this.sideImg
    },
  },
  methods: {
    validationForm() {
      // Shine VUE Starter Kit Login Pass
      this.$router.push({ name: 'home' })
      this.loginError = true
      // this.$refs.loginValidation.validate().then(async success => {
      //   if (success) {
      //     const result = await auth.logIn(this.userEmail, this.password)

      //     if (result.isOk) {
      // this.loginError = true
      const pathes = []
      console.log('router.routes :>> ', navigation)
      //       this.findpathes(result.menu, pathes)
      const temp = []
      navigation.forEach(item => {
        temp.push({
          title: item.name,
          path: item.route,
          icon: item.icon,
        })
      })
      console.log('temp :>> ', temp)
      this.findpathes(temp, pathes)

      console.log('pathes :>> ', pathes)
      this.$store.commit('setMenu', {
        menus: navigation,
        pathes,
      })
      // this.$router.push({ name: 'home' })
      //     } else {
      //       this.loginError = false
      //     }
      //   }
      // })
    },
    findpathes(items, pathes) {
      const keys = Object.keys(items)

      for (let i = 0; i < keys.length; i += 1) {
        if (items[keys[i]].path != null) {
          pathes.push(items[keys[i]].path)
        }

        if (items[keys[i]].items != null) {
          this.findpathes(items[keys[i]].items, pathes)
        }
      }
    },
    changeText() {
      this.loginError = true
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
#shineLogo {
  width: 30px;
  height: 30px;
}
#signInButton{
  margin-top: 50px;
}
#imageWrapper {
  background-color: white;
}
</style>
