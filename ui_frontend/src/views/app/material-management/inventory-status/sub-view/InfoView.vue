<template>
  <b-card>
    <b-row>
      <b-col>
        <div>
          <div id="buttonGroup">
            <b>자재 현황</b>
            <hr>
          </div>
          <div>
            <DxDataGrid
              :ref="gridRefName"
              :data-source="dataSource"
              height="500"
              @toolbar-preparing="onToolbarPreparing"
            >
              <DxLoadPanel :enabled="true" />
              <DxExport
                :enabled="true"
                :allow-export-selected-data="true"
              />
              <DxSearchPanel
                :visible="true"
              />
              <DxSelection
                mode="multiple"
              />
              <DxColumn
                data-field="materialCode"
                caption="자제코드"
              />
              <DxColumn
                data-field="revNo"
                caption="Rev No"
              />
              <DxColumn
                data-field="explanation"
                caption="설명"
              />
              <DxColumn
                data-field="materialType"
                caption="타입"
              />
              <DxColumn
                data-field="lotQuantity"
                caption="수량"
              />
              <DxColumn
                data-field="note"
                caption="비고"
              />
              <DxScrolling
                column-rendering-mode="Horizontal"
              />
            </DxDataGrid>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  DxDataGrid, DxColumn, DxScrolling, DxSearchPanel, DxSelection, DxLoadPanel, DxExport,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxSearchPanel,
    DxSelection,
    DxLoadPanel,
    DxExport,
  },

  props: {
    formData: Object,
    dataSource: Array,
  },

  data() {
    return {
      displayData: {},
      gridRefName: 'dataGrid',
    }
  },

  methods: {
    onToolbarPreparing(e) {
      const toolbarItems = e.toolbarOptions.items
      // Adds a new item
      toolbarItems.push({
        widget: 'dxButton',
        options: {
          icon: 'refresh',
          onClick: this.refreshDataGrid.bind(),
        },
        location: 'before',
      })
      toolbarItems.push({
        widget: 'dxButton',
        options: {
          icon: 'print',
          onClick: this.printDataGrid.bind(),
        },
        location: 'before',
      })
    },

    refreshDataGrid() {
      this.$refs[this.gridRefName].instance.refresh()
    },

    printDataGrid() {
      this.$refs[this.gridRefName].instance.print()
    },

  },

}
</script>

<style>

</style>
