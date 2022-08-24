<template>
  <b-card>
    <b-row>
      <b-col>
        <div id="buttonGroup">
          <b>자재 목록</b>
          <b-button
            style="float: right;position: relative;bottom:10px;"
            variant="primary"
            @click="onButtonClick"
          >
            선택
          </b-button>
          <hr>
        </div>
        <DxDataGrid
          ref="dataGrid"
          :data-source="dataSource2"
          height="200"
          @selection-changed="onSelectionChanged"
        >
          <DxSearchPanel
            :visible="true"
          />
          <DxSelection
            mode="multiple"
            :allow-select-all="false"
          />
          <DxColumn
            data-field="id.lotId"
            caption="Lot id"
          />
          <DxColumn
            data-field="standard"
            caption="규격"
          />
          <DxColumn
            data-field="mainCategory"
            caption="대분류"
          />
          <DxColumn
            data-field="unit"
            caption="단위"
          />
          <DxColumn
            data-field="lotQuantity"
            caption="수량"
          />
          <DxColumn
            data-field="deliveryDate"
            caption="입고일자"
          />
          <DxColumn
            data-field="note"
            caption="비고"
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
  DxDataGrid, DxColumn, DxScrolling, DxSearchPanel, DxSelection,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxSearchPanel,
    DxSelection,
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

  methods: {
    onSelectionChanged({ selectedRowsData }) {
      console.log(selectedRowsData)
      this.selectData = this.$refs.dataGrid.instance.getSelectedRowsData()
      this.onButtonClick.bind()
    },

    onButtonClick(e) {
      console.log(e)
      const data = this.selectData
      this.$emit('buttonClick', data)
    },
  },
}
</script>

<style>

</style>
