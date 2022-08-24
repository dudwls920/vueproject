<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <div class="option">
              <div>자재 코드</div>
              <DxSelectBox
                v-model="searchFormData.materialCode"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>구분</div>
              <DxSelectBox
                v-model="searchFormData.z"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>Area</div>
              <DxSelectBox
                v-model="searchFormData.a"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>상태</div>
              <DxSelectBox
                v-model="searchFormData.b"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>설비</div>
              <DxSelectBox
                v-model="searchFormData.c"
                :search-enabled="true"
                :items="['']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>Lot id</div>
              <DxTextBox
                v-model="searchFormData.lotId"
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
import DxTextBox from 'devextreme-vue/text-box'
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  name: 'SearchViewVue',

  components: {
    DxTextBox,
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
