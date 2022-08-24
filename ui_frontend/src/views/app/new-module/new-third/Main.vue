<template>
  <div>
    <b-row
      class="mb-1"
    >
      <b-col
        cols="12"
      >
        <SearchView
          @onSearchClick="onSearchClick"
        />
      </b-col>
    </b-row>
    <b-row
      class="mb-1"
    >
      <b-col
        cols="12"
      >
        <Sub
          :form-data="formData"
          :data-source="dataSource"
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
      console.log(data)
      const response = await httpService.Get_Param('/api/shelfSpec', {
        params: {
          id: data.id || '',
          name: data.name || '',
        },
      })
      this.dataSource = response
      console.log('불렀니?')
    },
  },
}
</script>

<style>

</style>
