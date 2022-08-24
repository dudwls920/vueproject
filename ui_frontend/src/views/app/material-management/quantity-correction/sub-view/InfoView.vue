<template>
  <b-card>
    <b-row>
      <b-col>
        <div id="buttonGroup">
          <b>자재 목록</b>
          <hr>
        </div>
        <DxDataGrid
          :data-source="dataSource2"
          height="200"
          :selection="{ mode: 'single' }"
          @selection-changed="onSelectionChanged"
        >
          <DxSearchPanel
            :visible="true"
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
            data-field="Unit"
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
  DxDataGrid, DxColumn, DxScrolling, DxSearchPanel,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxSearchPanel,
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
      const data = selectedRowsData[0]
      this.$emit('selectionChanged', data)
    },
  },

}
</script>

<style>

</style>
