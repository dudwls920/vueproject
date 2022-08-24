<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <div class="option">
              <div>대분류</div>
              <DxSelectBox
                v-model="searchFormData.mainCategory"
                :search-enabled="true"
                :data-source="mainCategory"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>매입처</div>
              <DxSelectBox
                v-model="searchFormData.purchasePlace"
                :search-enabled="true"
                :data-source="purchasePlace"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>Area</div>
              <DxSelectBox
                v-model="searchFormData.b"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>상태</div>
              <DxSelectBox
                v-model="searchFormData.c"
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
  components: {
    DxSelectBox,
  },

  data() {
    return {
      searchFormData: {
      },
      mainCategory: ['EA'],
      purchasePlace: ['aa', 'bb', 'cc'],
    }
  },

  methods: {
    onSearchButtonClick(e) {
      console.log(e)
      this.$emit('searchClick', this.searchFormData)
    },
  },
}
</script>

<style>

</style>
