<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="7">
        <InfoView
          :form-data="formData"
          :data-source="dataSource"
        />
      </b-col>
      <b-col cols="5">
        <information
          @inserted="onInserted"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import httpService from '@/service/httpService'
import InfoView from './sub-view/InfoView.vue'
import information from './sub-view/information.vue'

export default {
  components: {
    information,
    InfoView,
  },

  data() {
    return {
      information,
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
      const response = await httpService.Get('/api/lot-registration/find-all')
      this.dataSource = response
    },

    async onInserted(data) {
      console.log(data)
      await httpService.Put('/api/lot-registration/insert', {
        id: {
          lotid: data.id.lotid || '',
        },
        deliveryDate: data.deliveryDate || '',
        plant: data.plant || '',
        materialCode: data.materialCode || '',
        revNo: data.revNo || '',
        explanation: data.explanation || '',
        materialType: data.materialType || '',
        mainCategory: data.mainCategory || '',
        middleClass: data.middleClass || '',
        standard: data.standard || '',
        unit: data.unit || '',
        lotQuantity: data.lotQuantity || '',
        inspectionStatus: data.inspectionStatus || '',
        purchasePlace: data.purchasePlace || '',
        validity: data.validity || '',
        note: data.note || '',
      }, data)
    },

  },
}
</script>

<style>

</style>
