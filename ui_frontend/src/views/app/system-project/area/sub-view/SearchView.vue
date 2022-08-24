<template>
  <div>
    <b-card>
      <b-card-body>
        <b-row>
          <b-col>
            <div class="option">
              <div>사업장코드</div>
              <DxSelectBox
                v-model="searchFormData.plant"
                :search-enabled="true"
                :items="['NS1']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>Area 타입</div>
              <DxSelectBox
                v-model="searchFormData.areaType"
                :search-enabled="true"
                :items="['productionArea','StorogeArea']"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>상위 Area</div>
              <DxSelectBox
                v-model="searchFormData.parentArea"
                :data-source="parentSource"
                display-expr="parentArea"
                value-expr="parentArea"
                :search-enabled="true"
              />
            </div>
          </b-col>
          <b-col>
            <div class="option">
              <div>Area 코드</div>
              <DxTextBox
                v-model="searchFormData.areaId"
              />
            </div>
          </b-col>
          <b-col
            cols="4"
          >
            <b-button
              @click="onSearchButtonClick"
            >
              검색
            </b-button>
          </b-col>
        </b-row>
      </b-card-body>
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

  props: {
    parentSource: Array,
  },

  data() {
    const plants = '/api/areaManagement/find-all'
    return {
      searchFormData: {
        areaId: '',
        plant: '',
        areaType: '',
        parentArea: '',
      },
      plants,
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
