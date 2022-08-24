<template>
  <div>
    <b-row>
      <b-col>
        <sub-upper
          :shelf-spec="shelfSpec"
          @selectedName="onSelectedName"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <sub-lower
          :shelf-cell-info="shelfCellInfo"
          :selected-name="selectedName"
          @rowInserted="onRowInserted"
          @rowUpdated="onRowUpdated"
          @rowRemoved="onRowRemoved"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import SubUpper from './sub-view/SubUpper.vue'
import SubLower from './sub-view/SubLower.vue'

export default {
  components: {
    SubUpper,
    SubLower,
  },
  data() {
    return {
      shelfSpec: [],
      shelfCellInfo: [],
      selectedName: '',
    }
  },
  mounted() {
    this.getShelfSpec()
    this.getShelfCellInfo()
  },
  methods: {
    async getShelfSpec() {
      try {
        const response = await axios.get('/api/shelfSpec')
        this.shelfSpec = response.data
      } catch (err) {
        this.$toast(err)
      }
    },
    getShelfCellInfo() { //  Get
      try {
        this.$httpService.Get('/api/shelfCellInfo').then(res => {
          console.log(res)
          this.shelfCellInfo = res
        })
      } catch (err) {
        this.$toast(err)
      }
    },
    onSelectedName(e) {
      this.selectedName = e
    },
    async onRowInserted(e) { // Post
      const info = {
        name: e.name,
        cellId: e.cellId,
      }
      try {
        const response = await axios.post('/api/shelfCellInfo', info)
        this.$toast(response.statusText)
        this.getShelfCellInfo()
      } catch (err) {
        console.log(err)
      }
    },
    // async onRowUpdated(e) { // Put
    //   console.log(e)
    //   const info = {
    //     name: e.name,
    //     cellId: e.cellId,
    //     id: e.id,
    //   }
    //   try {
    //     const response = await axios.put(`/api/shelfCellInfo/${info.id}`, info)
    //     this.$toast(response.statusText)
    //     this.getShelfCellInfo()
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    async onRowUpdated(e) { // Patch
      const info = {
        name: e.name,
        cellId: e.cellId,
        id: e.id,
      }
      try {
        const response = await axios.patch(`/api/shelfCellInfo/${info.id}`, info)
        this.$toast(response.statusText)
        this.getShelfCellInfo()
      } catch (err) {
        console.log(err)
      }
    },
    async onRowRemoved(e) { // Delete
      try {
        const response = await axios.delete(`/api/shelfCellInfo/${e.id}`)
        this.$toast(response.statusText)
        this.getShelfCellInfo()
      } catch (err) {
        this.$toast(err)
      }
    },
  },
}
</script>

<style></style>
