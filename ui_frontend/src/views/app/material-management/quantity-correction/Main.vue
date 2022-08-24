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
          @selectionChanged="onSelectionChanged"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <Information
          :form-data="formData"
          :data-source="dataSource"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import httpService from '@/service/httpService'
import InfoView from './sub-view/InfoView.vue'
import SearchView from './sub-view/SearchView.vue'
import Information from './sub-view/Information.vue'

export default {
  components: {
    SearchView,
    InfoView,
    Information,
  },

  data() {
    return {
      SearchView,
      InfoView,
      Information,
      dataSource: [],
      dataSource2: [],
      formData: {},
      formData2: {},
    }
  },

  methods: {

    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/lot-registration/find-all', {
        params: {
          mainCategory: data.mainCategory || '',
          purchasePlace: data.purchasePlace || '',
        },
      })
      this.dataSource2 = response
    },

    async onSelectionChanged(data) {
      console.log(data)
      const response = await httpService.Get_Param('/api/lot-registration/find-all', {
        params: {
          id: {
            lotId: data.lotId || '',
          },
          materialCode: data.materialCode || '',
          explanation: data.explanation || '',
          standard: data.standard || '',
          lotQuantity: data.lotQuantity || '',
          Validity: data.Validity || '',
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
