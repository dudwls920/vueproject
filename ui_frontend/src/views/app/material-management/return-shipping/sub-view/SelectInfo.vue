<template>
  <b-card>
    <b-row>
      <b-col>
        <div>
          <b>선택 Lot 목록</b>
          <hr>
        </div>

        <DxDataGrid
          :data-source="dataSource"
          height="200"
        >
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
          <DxSummary>
            <DxTotalItem
              column="규격"
              summary-type="count"
            />
          </DxSummary>
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
  DxDataGrid, DxColumn, DxScrolling, DxTotalItem, DxSummary,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxTotalItem,
    DxSummary,
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
