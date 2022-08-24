<template>
  <b-card>
    <b-row>
      <b-col>
        <DxDataGrid
          :data-source="dataSource"
          height="500"
        >
          <DxFilterRow :visible="true" />
          <DxColumn
            data-field="ID"
            caption="ID"
            width="300"
          />
          <DxColumn
            data-field="TIME"
            caption="TIME"
            width="200"
          />
          <DxColumn
            data-field="TRANSPORTJOBID"
            caption="TRANSPORTJOBID"
            width="200"
          />
          <DxColumn
            data-field="TRANSPORTCOMMANDID"
            caption="TRANSPORTCOMMANDID"
            width="200"
          />
          <DxColumn
            data-field="CARRIERNAME"
            caption="CARRIERNAME"
            width="120"
          />
          <DxColumn
            data-field="FROMMACHINENAME"
            caption="FROMMACHINENAME"
            width="170"
          />
          <DxColumn
            data-field="FROMUNITNAME"
            caption="FROMUNITNAME"
            width="150"
          />
          <DxColumn
            data-field="TOTYPE"
            caption="TOTYPE"
            width="100"
          />
          <DxColumn
            data-field="TOMACHINENAME"
            caption="TOMACHINENAME"
            width="150"
          />
          <DxColumn
            data-field="TOUNITNAME"
            caption="TOUNITNAME"
            width="150"
          />
          <DxColumn
            data-field="PRIORITY"
            caption="PRIORITY"
            width="100"
          />
          <DxColumn
            data-field="STATE"
            caption="STATE"
            width="150"
          />
          <DxColumn
            data-field="DESCRIPTION"
            caption="DESCRIPTION"
            width="150"
          />
          <DxColumn
            data-field="FIXEDROUTE"
            caption="FIXEDROUTE"
            width="150"
          />
          <DxColumn
            data-field="TRANSPORTMACHINENAME"
            caption="TRANSPORTMACHINENAME"
            width="200"
          />
          <DxColumn
            data-field="TRANSPORTUNITNAME"
            caption="TRANSPORTUNITNAME"
            width="170"
          />
          <DxColumn
            data-field="FROMZONENAME"
            caption="FROMZONENAME"
            width="150"
          />
          <DxColumn
            data-field="TOZONENAME"
            caption="TOZONENAME"
            width="150"
          />
          <DxColumn
            data-field="PARTITIONID"
            caption="PARTITIONID"
            width="150"
          />
          <DxColumn
            data-field="COMM
            ANDMACHINENAME"
            caption="COMMANDMACHINENAME"
            width="200"
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
import {
  DxDataGrid, DxColumn, DxScrolling, DxFilterRow,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxFilterRow,
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

}
</script>

<style>

</style>
