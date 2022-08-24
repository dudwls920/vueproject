<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <b-form-group
              label="id"
            >
              <DxTextBox
                v-model="searchFormData.id"
                placeholder="id"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="machinename"
            >
              <DxTextBox
                v-model="searchFormData.machinename"
                placeholder="machinename"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="state"
            >
              <DxTextBox
                v-model="searchFormData.state"
                placeholder="state"
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
        machinename: '',
        state: '',
      },
    }
  },

  methods: {
    onSearchButtonClick() {
      this.$emit('onSearchClick', this.searchFormData)
    },
  },
}
</script>

<style>

</style>
