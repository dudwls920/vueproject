<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="12">
        <SearchView
          :parent-source="parentSource"
          @searchClick="onSearchClick"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col cols="12">
        <InfoView
          :form-data="formData"
          :data-source="dataSource"
          @rowUpdated="onRowUpdated"
          @rowInserted="onRowInserted"
          @rowRemoved="onRowRemoved"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import httpService from '@/service/httpService'
import SearchView from './sub-view/SearchView.vue'
import InfoView from './sub-view/InfoView.vue'

export default {
  components: {
    SearchView,
    InfoView,
  },

  data() {
    return {
      SearchView,
      InfoView,
      dataSource: [],
      formData: {},
      parentSource: [],
    }
  },

  mounted() {
    this.getMount()
    this.getSource()
  },

  methods: {
    async getMount() {
      const response = await httpService.Get('/api/area-management/find-all')
      this.dataSource = response
    },

    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/area-management/find-all', {
        params: {
          ids: {
            plant: data.plant || '',
            areaId: data.areaId || '',
          },
          areaType: data.areaType || '',
          parentArea: data.parentArea || '',
        },
      })
      this.dataSource = response
    },

    async onRowUpdated(data) {
      await httpService.Patch('/api/update', {
        id: {
          ids: {
            plant: data.ids.plant || '',
            areaId: data.ids.areaId || '',
          },
          description: data.description || '',
          areaType: data.areaType || '',
          parentArea: data.parentArea || '',
          useFlag: data.useFlag || '',
          remark: data.remark || '',
          crtDt: data.crtDt || '',
          crtUsr: data.crtUsr || '',
          updDt: data.updDt || '',
          updUsr: data.updUsr || '',
        },
      }, data).then(res => {
        if (res || res.length > 0) {
          this.onRowUpdated({})
        }
      })
    },

    async onRowInserted(data) {
      await httpService.Put('/api/area-management/insert', {
        ids: {
          plant: data.ids.plant || '',
          areaId: data.ids.areaId || '',
        },
        description: data.description || '',
        areaType: data.areaType || '',
        parentArea: data.parentArea || '',
        useFlag: data.useFlag || '',
        remark: data.remark || '',
        crtDt: data.crtDt || '',
        crtUsr: data.crtUsr || '',
        updDt: data.updDt || '',
        updUsr: data.updUsr || '',
      }, data)
    },

    async onRowRemoved(data) {
      const response = await httpService.Delete_Key('/api/area-management/delete-by-id', {
        params: {
          plant: data.ids.plant || '',
          areaId: data.ids.areaId || '',
        },
      })
      console.log('로그', response)
      this.onSearchClick()
    },

    async getSource() {
      this.parentSource = await httpService.Get_Param('/api/area-management/select', {
        params: {
          parentArea: window.sessionStorage.getItem('userParentArea'),
        },
      })
    },

  },
}
</script>

<style>

</style>
