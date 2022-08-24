<template>
  <b-card>
    <b-row>
      <b-col>
        <b>Area 정보</b>
        <DxDataGrid
          :data-source="dataSource"
          height="500"
          :show-row-lines="true"
          :show-borders="true"
          @row-updated="onRowUpdated"
          @row-inserted="onRowInserted"
          @row-removed="onRowRemoved"
          @init-new-row="onInitNewRow"
          @editing-start="onEditingStart"
        >
          <DxEditing
            :allow-updating="true"
            :allow-deleting="true"
            :allow-adding="true"
            :use-icons="true"
            mode="popup"
          >
            <DxPopup
              :show-title="true"
              :width="600"
              :height="550"
              title="System Management"
            />
            <DxForm>
              <DxItem
                :col-count="2"
                :col-span="2"
                item-type="group"
              >
                <DxItem
                  data-field="ids.plant"
                  :editor-options="{
                    readOnly: temp,
                  }"
                />
                <DxItem
                  data-field="ids.areaId"
                  :editor-options="{
                    readOnly: temp,
                  }"
                />
                <DxItem data-field="description" />
                <DxItem data-field="areaType" />
                <DxItem data-field="parentArea" />
                <DxItem data-field="useFlag" />
                <DxItem
                  data-field="crtDt"
                  :value="now"
                  :editor-options="{
                    readOnly: temp,
                  }"
                />
                <DxItem
                  data-field="crtUsr"
                  :value="now"
                  :editor-options="{
                    readOnly: temp,
                  }"
                />
                <DxItem data-field="updDt" />
                <DxItem data-field="updUsr" />
                <DxItem data-field="remark" />
              </DxItem>
            </DxForm>
          </DxEditing>
          <DxExport
            :enabled="true"
          />
          <DxSelection
            :recursive="recursive"
            mode="multiple"
          />
          <DxColumn
            type="buttons"
            :width="110"
          >
            <DxButton name="edit" />
            <DxButton name="delete" />
          </DxColumn>
          <DxColumn
            data-field="ids.plant"
            caption="PLANT_ID"
            width="100"
          />
          <DxColumn
            data-field="ids.areaId"
            caption="AREA_ID"
            width="100"
          />
          <DxColumn
            data-field="description"
            caption="DESCRIPTION"
            width="150"
          />
          <DxColumn
            data-field="areaType"
            caption="AREA_TYPE"
            width="150"
          />
          <DxColumn
            data-field="parentArea"
            caption="PARENT_AREA"
            width="150"
          />
          <DxColumn
            data-field="useFlag"
            caption="USE_FLAG"
            width="100"
          />
          <DxColumn
            data-field="crtDt"
            caption="생성일자"
            width="100"
            data-type="date"
          />
          <DxColumn
            data-field="crtUsr"
            caption="생성유저"
            width="100"
          />
          <DxColumn
            data-field="updDt"
            caption="수정일자"
            width="100"
            data-type="date"
          />
          <DxColumn
            data-field="updUsr"
            caption="수정유저"
            width="100"
          />
          <DxColumn
            data-field="remark"
            caption="비고"
            width="100"
          />
          <DxSummary>
            <DxTotalItem
              column="PLANT_ID"
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
  DxDataGrid, DxColumn, DxScrolling, DxEditing, DxExport, DxPopup, DxForm, DxSelection, DxSummary, DxTotalItem,
} from 'devextreme-vue/data-grid'
import { DxItem } from 'devextreme-vue/form'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxEditing,
    DxExport,
    DxPopup,
    DxForm,
    DxItem,
    DxSelection,
    DxSummary,
    DxTotalItem,
  },

  props: {
    formData: Object,
    dataSource: Array,
  },

  data() {
    return {
      displayData: {},
      temp: true,
      now: new Date(),
    }
  },

  methods: {
    onRowUpdated(e) {
      console.log(e)
      this.$emit('rowUpdated', e.data)
    },
    onRowInserted(e) {
      this.$emit('rowInserted', e.data)
    },
    onRowRemoved(e) {
      this.$emit('rowRemoved', e.data)
    },
    onInitNewRow(e) {
      console.log(e)
      this.temp = false
      e.data = {
        useFlag: 'Y',
        crtDt: this.now,
        updDt: this.now,
      }
    },
    onEditingStart(e) {
      this.temp = true
      e.data = {
        updDt: this.now,

      }
    },

  },

}
</script>

<style>

</style>
