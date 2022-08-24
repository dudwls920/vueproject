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
        <Information
          :form-data="formData"
          :data-source="dataSource"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col>
        <InfoView
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
      formData: {},
    }
  },

  mounted() {
    this.getMount()
  },

  methods: {
    async getMount() {
      const response = await httpService.Get('/api/lot-registration/find-all')
      this.dataSource = response
    },

    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/lot-registration/find-all', {
        params: {
          id: {
            lotId: data.lotId || '',
          },
          materialCode: data.materialCode || '',
        },
      })
      this.dataSource = response
    },

  },
}
</script>

<style>

</style>
