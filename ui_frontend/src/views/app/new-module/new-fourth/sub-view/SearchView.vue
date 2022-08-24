<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <b-form-group
              label="ID"
            >
              <DxTextBox
                v-model="searchFormData.ID"
                placeholder="ID"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="TRANSPORTJOBID"
            >
              <DxTextBox
                v-model="searchFormData.TRANSPORTJOBID"
                placeholder="TRANSPORTJOBID"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label="STATE"
            >
              <DxTextBox
                v-model="searchFormData.STATE"
                placeholder="STATE"
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
        ID: '',
        TRANSPORTJOBID: '',
        STATE: '',
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
