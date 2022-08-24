<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="12">
        <SearchView
          @onSearchClick="onSearchClick"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col cols="12">
        <Sub
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
import Sub from './sub-view/Sub.vue'
import SearchView from './sub-view/SearchView.vue'

export default {
  components: {
    Sub,
    SearchView,
  },

  data() {
    return {
      Sub,
      SearchView,
      dataSource: [],
      formData: {},
    }
  },

  methods: {
    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/machinehistory-menu/find-all', {
        params: {
          id: data.id || '',
          machinename: data.machinename || '',
          state: data.state || '',
        },
      })
      this.dataSource = response
    },

    async onRowUpdated(data) {
      await httpService.Patch('/api/machinehistory-menu/update', {
        id: {
          id: data.id.id || '',
          time: data.time || '',
          controlstate: data.controlstate || '',
          connectionstate: data.connectionstate || '',
          tscstate: data.tscstate || '',
          state: data.state || '',
          processingstate: data.processingstate || '',
          machinename: data.machinename || '',
          partitionid: data.partitionid || '',
        },
      }, data).then(res => {
        if (res || res.length > 0) {
          this.onRowUpdated({})
        }
      })
    },

    async onRowInserted(data) {
      const response = await httpService.Put('/api/machinehistory-menu/insert', {
        id: data.id.id || '',
        time: data.time || '',
        controlstate: data.controlstate || '',
        connectionstate: data.connectionstate || '',
        tscstate: data.tscstate || '',
        state: data.state || '',
        processingstate: data.processingstate || '',
        machinename: data.machinename || '',
        partitionid: data.partitionid || '',
      })
      console.log(data)
      this.dataSource = response
    },

    async onRowRemoved(data) {
      console.log(data)
      const response = await httpService.Delete_Key('/api/machinehistory-menu/delete-by-id', {
        params: {
          id: data.id.id || '',
        },
      })
      this.dataSource = response
    },

  },
}
</script>

<style>

</style>
