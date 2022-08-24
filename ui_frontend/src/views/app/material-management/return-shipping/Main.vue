<template>
  <div>
    <b-row class="mb-2">
      <b-col>
        <SearchView
          @searchClick="onSearchClick"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <InfoView
          :form-data2="formData2"
          :data-source2="dataSource2"
          @buttonClick="onButtonClick"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <SelectInfo
          :form-data="formData"
          :data-source="dataSource"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <Information />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import httpService from '@/service/httpService'
import InfoView from './sub-view/InfoView.vue'
import SearchView from './sub-view/SearchView.vue'
import Information from './sub-view/Information.vue'
import SelectInfo from './sub-view/SelectInfo.vue'

export default {
  components: {
    SearchView,
    InfoView,
    Information,
    SelectInfo,
  },

  data() {
    return {
      SearchView,
      InfoView,
      Information,
      SelectInfo,
      dataSource: [],
      dataSource2: [],
      formData: {},
      formData2: {},
    }
  },

  methods: {

    async onSearchClick(data) {
      console.log(data)
      const response = await httpService.Get_Param('/api/lot-registration/find-all', {
        params: {
          mainCategory: data.mainCategory || '',
          purchasePlace: data.purchasePlace || '',
        },
      })
      this.dataSource2 = response
    },

    async onButtonClick(data) {
      console.log(data)
      const response = await httpService.Get_Param('/api/lot-registration/find-all', {
        params: {
          lotId: data.lotId || '',
          standard: data.standard || '',
          mainCategory: data.mainCategory || '',
          unit: data.unit || '',
          lotQuantity: data.lotQuantity || '',
          deliveryDate: data.deliveryDate || '',
          note: data.note || '',
        },
      })
      this.dataSource = response
    },

  },
}
</script>

<style>

</style>
