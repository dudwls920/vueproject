<template>
  <b-card>
    <b-row>
      <b-col>
        <DxDataGrid
          :data-source="dataSource"
          :selection="{ mode: 'single' }"
          height="300"
          @selection-changed="onSelectionChanged"
        >
          <DxColumn
            data-field="MACHINENAME"
            caption="MACHINENAME"
          />
          <DxColumn
            data-field="description"
            caption="PARTITIONID"
          />
          <DxScrolling
            mode="infinite"
          />
        </DxDataGrid>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  DxDataGrid, DxColumn, DxScrolling,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
  },

  props: {
    formData: Object,
    dataSource: Array,
  },

  data() {
    return {
      displayData: {},
    }
  },

  methods: {
    onSelectionChanged({ selectedRowsData }) {
      const data = selectedRowsData[0]
      this.$emit('onSelectionChanged', data)
    },
  },
}
</script>

<style>

</style>
