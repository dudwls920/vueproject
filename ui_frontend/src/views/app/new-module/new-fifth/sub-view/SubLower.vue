<template>
  <b-card>
    <b-row>
      <b-col>
        <DxDataGrid
          :data-source="dataSource2"
          height="500"
        >
          <DxColumn
            data-field="ID"
            caption="ID"
            width="300"
          />
          <DxColumn
            data-field="TIME"
            caption="TIME"
            width="220"
          />
          <DxColumn
            data-field="CONTROLSTATE"
            caption="CONTROLSTATE"
            width="170"
          />
          <DxColumn
            data-field="CONNECTIONSTATE"
            caption="CONNECTIONSTATE"
            width="170"
          />
          <DxColumn
            data-field="TSCSTATE"
            caption="TSCSTATE"
            width="100"
          />
          <DxColumn
            data-field="STATE"
            caption="STATE"
            width="150"
          />
          <DxColumn
            data-field="PROCESSINGSTATE"
            caption="PROCESSINGSTATE"
            width="150"
          />
          <DxColumn
            data-field="MACHINENAME"
            caption="MACHINENAME"
            width="150"
          />
          <DxColumn
            data-field="PARTITIONID"
            caption="PARTITIONID"
            width="120"
          />
          <DxScrolling
            column-rendering-mode="Horizontal"
            mode="infinite"
          />
        </DxDataGrid>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { DxDataGrid, DxColumn, DxScrolling } from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
  },

  props: {
    formData2: Object,
    dataSource2: Array,
  },

  data() {
    return {
      displayData: {},
    }
  },
}
</script>

<style></style>
