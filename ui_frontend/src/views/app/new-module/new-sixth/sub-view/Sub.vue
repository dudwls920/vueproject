<template>
  <b-card>
    <b-row>
      <b-col>
        <DxDataGrid
          :data-source="dataSource"
          height="500"
          @row-updated="onRowUpdated"
          @row-inserted="onRowInserted"
          @row-removed="onRowRemoved"
        >
          <DxEditing
            :allow-updating="true"
            :allow-deleting="true"
            :allow-adding="true"
            mode="row"
          />
          <DxLoadPanel :enabled="true" />
          <DxColumn
            data-field="id.id"
            caption="id"
            width="300"
          />
          <DxColumn
            data-field="time"
            caption="time"
            width="220"
          />
          <DxColumn
            data-field="controlstate"
            caption="controlstate"
            width="170"
          />
          <DxColumn
            data-field="connectionstate"
            caption="connectionstate"
            width="170"
          />
          <DxColumn
            data-field="tscstate"
            caption="tscstate"
            width="100"
          />
          <DxColumn
            data-field="state"
            caption="state"
            width="150"
          />
          <DxColumn
            data-field="processingstate"
            caption="processingstate"
            width="150"
          />
          <DxColumn
            data-field="machinename"
            caption="machinename"
            width="150"
          />
          <DxColumn
            data-field="partitionid"
            caption="partitionid"
            width="120"
          />
          <DxScrolling
            column-rendering-mode="Horizontal"
          />
        </DxDataGrid>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  DxDataGrid, DxColumn, DxScrolling, DxEditing,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxEditing,
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
    onRowUpdated(e) {
      console.log(e)
      this.$emit('rowUpdated', e.data)
    },
    onRowInserted(e) {
      console.log(e)
      this.$emit('rowInserted', e.data)
    },
    onRowRemoved(e) {
      console.log(e)
      this.$emit('rowRemoved', e.data)
    },
  },

}
</script>

<style>

</style>
