<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col
            cols="4"
          >
            <div class="option">
              <div><b>설비 코드</b></div>
              <DxSelectBox
                v-model="searchFormData.materialCode"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
        </b-row>
      </b-card-body>
      <b-card-footer>
        <b-button
          style="float: right;"
          variant="primary"
          @click="onSearchButtonClick"
        >
          검색
        </b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  name: 'SearchViewVue',

  components: {
    DxSelectBox,
  },

  data() {
    return {
      searchFormData: {
        materialCode: '',
        lotId: '',
      },
    }
  },

  methods: {
    onSearchButtonClick() {
      this.$emit('searchClick', this.searchFormData)
    },
  },
}
</script>

<style>

</style>
