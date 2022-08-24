<template>
  <b-card>
    <b-row>
      <b-col>
        <div>
          <b>불출 요청 목록</b>
          <hr>
          <DxSelectBox
            v-model="formData.inspectionStatus"
            style="width:160px;position: absolute; right: 200px;top: 55px;z-index:1;"
          />
        </div>
        <DxDataGrid
          :data-source="dataSource"
          height="560"
        >
          <DxSearchPanel
            :visible="true"
          />
          <DxColumn
            data-field="plant"
            caption="PLANT"
            width="100"
          />
          <DxColumn
            data-field="materialCode"
            caption="자재코드"
            width="100"
          />
          <DxColumn
            data-field="deliveryDate"
            caption="요청일자"
            width="100"
          />
          <DxColumn
            data-field="lotQuantity"
            caption="요청수량"
            width="100"
          />
          <DxColumn
            data-field="unit"
            caption="단위"
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
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
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
