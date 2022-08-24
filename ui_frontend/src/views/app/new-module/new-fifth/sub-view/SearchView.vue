<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <b-form-group
              label="MACHINENAME"
            >
              <DxTextBox
                v-model="searchFormData.MACHINENAME"
                placeholder="MACHINENAME"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="PARTITIONID"
            >
              <DxTextBox
                v-model="searchFormData.PARTITIONID"
                placeholder="PARTITIONID"
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
        MACHINENAME: '',
        PARTITIONID: '',
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
