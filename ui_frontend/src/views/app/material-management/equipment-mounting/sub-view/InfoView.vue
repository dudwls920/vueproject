<template>
  <b-card>
    <b-row>
      <b-col>
        <div id="buttonGroup">
          <b>자재 교체 정보</b>
          <hr>
        </div>
        <b-row>
          <div>
            <b-row>
              <div class="dx-field-value">
                <DxRadioGroup
                  :items="priorities"
                  :value="priorities[0]"
                  layout="horizontal"
                  style="position:relative;left:20px;"
                />
              </div>
            </b-row>
            <div>
              <DxDataGrid
                :data-source="dataSource"
                height="80"
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
            </div>
          </div>
          <div>
            <b-row>
              <div class="dx-field-value">
                <DxRadioGroup
                  :items="priorities"
                  :value="priorities[1]"
                  layout="horizontal"
                  style="position:relative;left:20px;"
                />
              </div>
            </b-row>
            <div>
              <DxDataGrid
                :data-source="dataSource"
                height="80"
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
            </div>
          </div>
        </b-row>
        <br>
        <div class="dx-field">
          <div class="dx-field-label">
            설비 상태
          </div>
          <div
            class="dx-field-value"
            style="padding-right:10px;"
          >
            <DxSelectBox
              :search-enabled="true"
              :items="['']"
            />
          </div>
          <div class="dx-field-label">
            사유
          </div>
          <div
            class="dx-field-value"
            style="padding-right:10px;"
          >
            <DxSelectBox
              :search-enabled="true"
              :items="['']"
            />
          </div>
          <div class="dx-field-label">
            작업일자
          </div>
          <div
            class="dx-field-value"
            style="padding-right:10px;"
          >
            <DxDateBox
              :value="now"
              type="date"
              :read-only="true"
            />
          </div>
          <div class="dx-field-label">
            사번
          </div>
          <div
            class="dx-field-value"
          >
            <DxTextBox />
          </div>
        </div>
        <div class="dx-field">
          <div class="dx-field-label">
            비고
          </div>
          <div class="dx-field-value">
            <DxTextBox
              style="width:150%;position:relative;right:50%;"
              :data-source="dataSource"
              data-field="note"
            />
          </div>
        </div>
        <b-button
          style="float: right;margin-left:5px;position:relative;top:10px;"
        >
          취소
        </b-button>
        <b-button
          variant="primary"
          style="float: right;position:relative;top:10px;"
        >
          실행
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import DxRadioGroup from 'devextreme-vue/radio-group'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxSelectBox from 'devextreme-vue/select-box'
import {
  DxDataGrid, DxColumn, DxScrolling,
} from 'devextreme-vue/data-grid'
import { priorities } from '../../../../../../data'

export default {
  components: {
    DxRadioGroup,
    DxTextBox,
    DxDateBox,
    DxSelectBox,
    DxDataGrid,
    DxColumn,
    DxScrolling,
  },

  props: {
    formData: Object,
    dataSource: Array,
  },

  data() {
    return {
      displayData: {},
      DxRadioGroup,
      priorities,
      now: new Date(),
    }
  },

  methods: {

  },

}
</script>

<style>

</style>
