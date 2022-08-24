<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="12">
        <SearchView @onSearchClick="onSearchClick" />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col cols="12">
        <Sub
          :form-data="formData"
          :data-source="dataSource"
          @onSelectionChanged="onSelectionChanged"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col cols="12">
        <SubLower
          :form-data2="formData2"
          :data-source2="dataSource2"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import httpService from '@/service/httpService'
import Sub from './sub-view/Sub.vue'
import SubLower from './sub-view/SubLower.vue'
import SearchView from './sub-view/SearchView.vue'

export default {
  components: {
    Sub,
    SearchView,
    SubLower,
  },

  data() {
    return {
      Sub,
      SearchView,
      SubLower,
      dataSource: [],
      dataSource2: [],
      formData: {},
      formData2: {},
    }
  },

  methods: {
    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/machine-history-id', {
        params: {
          MACHINENAME: data.MACHINENAME || '',
          PARTITIONID: data.PARTITIONID || '',
        },
      })
      this.dataSource = response
    },

    async onSelectionChanged(data) {
      console.log(data)
      const response = await httpService.Get_Param('/api/lot-registration/find-all', {
        params: {
          lotId: data.id.lotId || '',
          materialCode: data.materialCode || '',
          explanation: data.explanation || '',
          standard: data.standard || '',
          lotQuantity: data.lotQuantity || '',
          note: data.note || '',
        },
      })
      this.dataSource = response
    },
  },
}
</script>

<style></style>
