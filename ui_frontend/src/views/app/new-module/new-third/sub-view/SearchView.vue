<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <b-form-group
              label="아이디"
            >
              <DxTextBox
                v-model="searchFormData.id"
                placeholder="아이디"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="이름"
            >
              <DxTextBox
                v-model="searchFormData.name"
                placeholder="이름"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card-footer>
        <b-button
          @click="onSearchButtonClick"
        >
          검색
        </b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'

export default {
  name: 'SearchViewVue',
  components: {
    DxTextBox,
  },
  data() {
    return {
      searchFormData: {
        id: '',
        name: '',
      },
    }
  },
  methods: {
    onSearchButtonClick() {
      console.log('나 눌렀니?')
      this.$emit('onSearchClick', this.searchFormData)
    },
  },
}
</script>

<style>

</style>
