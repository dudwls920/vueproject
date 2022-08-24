<template>
  <b-card>
    <b-row>
      <b-col>
        <div>
          <b>자재 Lot 목록</b>
        </div>
        <hr>
        <DxDataGrid
          :data-source="dataSource"
          height="150"
        >
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
            data-field="note"
            caption="설명"
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
  DxDataGrid, DxColumn, DxScrolling, DxSelection,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxSelection,
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
