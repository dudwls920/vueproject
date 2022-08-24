<template>
  <b-card>
    <b-row>
      <b-col>
        <b>고객사 정보</b>
        <DxDataGrid
          :data-source="dataSource"
          height="640"
          @row-updated="onRowUpdated"
          @row-inserted="onRowInserted"
          @row-removed="onRowRemoved"
          @init-new-row="onInitNewRow"
          @editing-start="onEditingStart"
        >
          <DxSearchPanel
            :visible="true"
          />
          <DxEditing
            :allow-updating="true"
            :allow-deleting="true"
            :allow-adding="true"
            mode="popup"
          >
            <DxPopup
              :show-title="true"
              :width="600"
              :height="470"
              title="고객사 정보"
            />
            <DxForm>
              <DxItem
                :col-count="1"
                :col-span="2"
                item-type="group"
              >
                <DxItem
                  data-field="id.customerId"
                  :editor-options="{
                    readOnly: temp,
                  }"
                />
                <DxItem
                  data-field="description"
                />
                <DxItem
                  data-field="plant"
                />
                <DxItem
                  data-field="customerType"
                />
                <DxItem
                  data-field="useFlag"
                />
              </DxItem>
            </DxForm>
          </DxEditing>
          <DxExport
            :enabled="true"
          />
          <DxColumn
            type="buttons"
            :width="110"
          />
          <DxColumn
            data-field="plant"
            caption="PLANT"
            width="100"
          >
            <DxLookup
              :data-source="plants"
              value-expr="ID"
              display-expr="Name"
            />
          </DxColumn>
          <DxColumn
            data-field="description"
            caption="DESCRIPTION"
            width="150"
          />
          <DxColumn
            data-field="customerType"
            caption="TYPE"
            width="100"
          >
            <DxLookup
              :data-source="customert"
              value-expr="ID"
              display-expr="Name"
            />
          </DxColumn>
          <DxColumn
            data-field="useFlag"
            caption="USE_FLAG"
            width="100"
          >
            <DxLookup
              :data-source="flags"
              value-expr="ID"
              display-expr="Name"
            />
          </DxColumn>
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
          <DxColumn
            data-field="id.customerId"
            caption="CUSTOMERID"
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
  DxDataGrid, DxColumn, DxScrolling, DxEditing, DxExport, DxPopup, DxForm, DxLookup,
} from 'devextreme-vue/data-grid'
import {
  DxSearchPanel,
} from 'devextreme-vue/tree-list'
import { DxItem } from 'devextreme-vue/form'
import service from '../../../../../../data'

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
    DxSearchPanel,
    DxLookup,
  },

  props: {
    formData: Object,
    dataSource: Array,
  },

  data() {
    const flags = service.getFlags()
    const plants = service.getPlants()
    const customert = service.getCustomert()
    return {
      flags,
      plants,
      customert,
      displayData: {},
      temp: true,
    }
  },

  methods: {
    onRowUpdated(e) {
      console.log(e)
      this.$emit('rowUpdated', e.data)
    },
    onRowInserted(e) {
      console.log(e)
      this.$emit('rowInserted', e.data)
    },
    onRowRemoved(e) {
      console.log(e)
      this.$emit('rowRemoved', e.data)
    },
    onInitNewRow(e) {
      this.temp = false
      e.data = {
        useFlag: 'Y',
      }
    },
    onEditingStart() {
      this.temp = true
    },
  },

}
</script>

<style>

</style>
