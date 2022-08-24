<template>
  <b-card
    no-body
    class="header-shadow"
  >
    <b-card-header style="padding: 0px; top: -20px; left: 10px">
      <div class="custom-header">
        <feather-icon
          class="mr-1"
          icon="ListIcon"
          size="25"
          style="margin-right: 0px !important"
        />
        <span style="margin-left: 3%; vertical-align: middle"> Lot 생성 목록 </span>
      </div>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col>
          <DxDataGrid
            :data-source="orders"
            :show-borders="true"
            height="500"
            :show-column-lines="false"
            @toolbar-preparing="onToolbarPreparing"
          >
            <DxLoadPanel :enabled="true" />
            <DxColumn
              data-field="OrderNumber"
              caption="입고일"
              width="100"
            />
            <DxColumn
              data-field="OrderDate"
              caption="제조일"
              width="100"
            />
            <DxColumn
              data-field="CustomerStoreCity"
              caption="유효기간"
              width="100"
            />
            <DxColumn
              data-field="CustomerStoreState"
              caption="자재타입"
              width="100"
            />
            <DxColumn
              data-field="SaleAmount"
              caption="자재"
              width="100"
            />
            <DxColumn
              data-field="OrderNumber"
              caption="자재명"
              width="100"
            />
            <DxColumn
              data-field="OrderDate"
              caption="공급사"
              width="100"
            />
            <DxColumn
              data-field="CustomerStoreCity"
              caption="입고유형"
              width="100"
            />
            <DxColumn
              data-field="CustomerStoreState"
              caption="자재 Lot ID"
              width="100"
            />
            <DxColumn
              data-field="SaleAmount"
              caption="단위"
              width="100"
            />
            <DxColumn
              data-field="OrderNumber"
              caption="입고수량"
              width="100"
            />
            <DxColumn
              data-field="OrderDate"
              caption="재고수량"
              width="100"
            />
            <DxColumn
              data-field="CustomerStoreCity"
              caption="PO NO"
              width="100"
            />
            <DxColumn
              data-field="CustomerStoreState"
              caption="Line No"
              width="100"
            />
            <DxColumn
              data-field="SaleAmount"
              caption="입고창고"
              width="100"
            />
            <DxColumn
              data-field="OrderNumber"
              caption="세부 구역"
              width="100"
            />
            <DxColumn
              data-field="OrderDate"
              caption="수입검사 의뢰 여부"
              width="150"
            />
            <DxColumn
              data-field="OrderDate"
              caption="수입검사 완료 여부"
              width="150"
            />
            <DxScrolling column-rendering-mode="Horizontal " />
          </DxDataGrid>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col
          cols="2"
        >
          <br>
          <DxDateBox
            :value="now"
            type="date"
            display-format="yyyy-MM-dd"
          />
        </b-col>
        <b-col
          cols="2"
        >
          처리 시간 적용
          <DxCheckBox :value="false" />
          <b-form-timepicker
            id="timepicker-buttons"
            show-seconds
            now-button
            locale="kr"
          />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxScrolling,
  DxLoadPanel,
} from 'devextreme-vue/data-grid'
import DxDateBox from 'devextreme-vue/date-box'
import { DxCheckBox } from 'devextreme-vue/check-box'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxDateBox,
    DxLoadPanel,
    DxCheckBox,
  },
  data() {
    return {
      now: new Date(),
    }
  },

  methods: {
    onToolbarPreparing(e) {
      const toolbarItems = e.toolbarOptions.items
      // Adds a new item
      toolbarItems.push({
        widget: 'dxButton',
        options: {
          icon: 'save',
          text: '저장',
          onClick: this.saveDataGrid.bind(),
        },
        location: 'after',
      })
      toolbarItems.push({
        widget: 'dxButton',
        options: {
          text: 'clear',
          onClick: this.clearDataGrid.bind(),
        },
        location: 'after',
      })
      toolbarItems.push({
        widget: 'dxButton',
        options: {
          icon: 'export',
          onClick: this.exportDataGrid.bind(),
        },
        location: 'after',
      })
    },

    saveDataGrid() {

    },
    clearDataGrid() {

    },
    exportDataGrid() {

    },

    clear() {

    },
  },
}
</script>
<style>
.dx-datagrid-headers {
  color: black;
  background-color: rgba(128, 148, 176, 0.706);
  touch-action: pinch-zoom;
  font-weight: bold;
}
</style>
