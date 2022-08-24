<template>
  <b-card>
    <b-row>
      <b-col>
        <div>
          <b>Lot 목록</b>
          <hr>
          <DxSelectBox
            v-model="formData.inspection"
            style="width:160px;position: absolute; right: 200px;top: 57px;z-index:1;"
          />
        </div>
        <DxDataGrid
          :data-source="dataSource"
          height="500"
        >
          <DxSearchPanel
            :visible="true"
          />
          <DxSelection
            mode="multiple"
          />
          <DxColumn
            data-field="id.lotId"
            caption="Lot Id"
            width="100"
          />
          <DxColumn
            data-field="plant"
            caption="PLANT"
            width="100"
          />
          <DxColumn
            data-field="Explanation"
            caption="설명"
            width="100"
          />
          <DxColumn
            data-field="materialCode"
            caption="자제코드"
            width="100"
          />
          <DxColumn
            data-field="mainCategory"
            caption="대분류"
            width="100"
          />
          <DxColumn
            data-field="materialType"
            caption="타입"
            width="100"
          />
          <DxColumn
            data-field="unit"
            caption="단위"
            width="100"
          />
          <DxColumn
            data-field="lotQuantity"
            caption="수량"
            width="100"
          />
          <DxColumn
            data-field="note"
            caption="비고"
            width="100"
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
  DxDataGrid, DxColumn, DxScrolling, DxSelection, DxSearchPanel,
} from 'devextreme-vue/data-grid'
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxSelection,
    DxSearchPanel,
    DxSelectBox,
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
