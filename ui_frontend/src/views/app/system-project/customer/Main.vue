<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="4">
        <ClickView
          @selectItem="onSelectItem"
        />
      </b-col>
      <b-col cols="8">
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
import ClickView from './sub-view/ClickView.vue'
import InfoView from './sub-view/InfoView.vue'

export default {
  components: {
    ClickView,
    InfoView,
  },

  data() {
    return {
      ClickView,
      InfoView,
      dataSource: [],
      formData: {},
    }
  },

  mounted() {
    this.getMount()
  },

  methods: {
    async getMount() {
      const response = await httpService.Get('/api/customer-management/find-all')
      this.dataSource = response
    },

    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/customer-management/find-all', {
        params: {
          company: data.company || '',
        },
      })
      this.dataSource = response
    },

    async onRowUpdated(data) {
      await httpService.Patch('/api/customer-management/update', {
        id: {
          customerId: data.id.customerId || '',
        },
        plant: data.plant || '',
        description: data.description || '',
        customerType: data.customerType || '',
        useFlag: data.useFlag || '',
        crtDt: data.crtDt || '',
        crtUsr: data.crtUsr || '',
        updDt: data.updDt || '',
        updUsr: data.updUsr || '',
        remark: data.remark || '',
      }, data).then(res => {
        if (res || res.length > 0) {
          this.onRowUpdated({})
        }
      })
    },

    async onRowInserted(data) {
      await httpService.Put('/api/customer-management/insert', {
        id: {
          customerId: data.id.customerId || '',
        },
        plant: data.plant || '',
        description: data.description || '',
        customerType: data.customerType || '',
        useFlag: data.useFlag || '',
        crtDt: data.crtDt || '',
        crtUsr: data.crtUsr || '',
        updDt: data.updDt || '',
        updUsr: data.updUsr || '',
        remark: data.remark || '',
      }, data)
    },

    async onRowRemoved(data) {
      const response = await httpService.Delete_Key('/api/customer-management/delete-by-id', {
        params: {
          customerId: data.id.customerId || '',
        },
      })
      console.log('로그', response)
      this.onSearchClick()
    },

    async onSelectItem(data) {
      console.log(data)
      const response = await httpService.Get_Param('/api/customer-management/find-all', {
        params: {
          plant: data.plant || '',
          description: data.description || '',
          customerType: data.customerType || '',
        },
      })
      this.dataSource = response
    },

  },
}
</script>

<style>

</style>
