<template>
  <b-card>
    <b-row>
      <b-col>
        <div>
          <b>자재 Lot 생성 목록</b>
          <hr>
        </div>
        <DxDataGrid
          :data-source="dataSource"
          height="1110"
        >
          <DxExport
            :enabled="true"
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
            data-field="note"
            caption="설명"
            width="100"
          />
          <DxColumn
            data-field="deliveryDate"
            caption="입고일"
            width="100"
          />
          <DxColumn
            data-field="materialCode"
            caption="자제코드"
            width="100"
          />
          <DxColumn
            data-field="revNo"
            caption="Rev No"
            width="100"
          />
          <DxColumn
            data-field="materialType"
            caption="타입"
            width="100"
          />
          <DxColumn
            data-field="mainCategory"
            caption="대분류"
            width="100"
          />
          <DxColumn
            data-field="middleClass"
            caption="중분류"
            width="100"
          />
          <DxColumn
            data-field="standard"
            caption="규격"
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
  DxDataGrid, DxColumn, DxScrolling, DxExport,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxExport,
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
