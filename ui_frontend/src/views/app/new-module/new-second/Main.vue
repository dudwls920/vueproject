<template>
  <div>
    <b-row
      class="mb-2"
      cols="12"
    >
      <b-col
        width="1000"
      >
        <CoasetType3 />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import httpService from '@/service/httpService'
import CoasetType3 from './sub-view/CoasetType3.vue'

export default {
  components: {
    CoasetType3,
  },

  data() {
    return {
      CoasetType3,
      dataSource: [],
      formData: {},
    }
  },

  methods: {
    async onSearchClick(data) {
      const response = await httpService.Get_Param('/api/transport-cmd-history', {
        params: {
          ID: data.ID || '',
          TRANSPORTJOBID: data.TRANSPORTJOBID || '',
          STATE: data.STATE || '',
        },
      })
      this.dataSource = response
    },
  },

}
</script>

<style>

</style>
