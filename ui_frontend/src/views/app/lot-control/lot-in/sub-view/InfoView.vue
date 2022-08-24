<template>
  <b-card no-body class="header-shadow">
    <b-card-header style="padding: 0px; top: -20px; left: 10px">
      <div class="custom-header">
        <feather-icon
          class="mr-1"
          icon="ListIcon"
          size="25"
          style="margin-right: 0px !important"
        />
        <span style="margin-left: 3%; vertical-align: middle">
          자재 Lot 생성 정보
        </span>
      </div>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col>
          입고일
          <DxDateBox :value="now" display-format="yyyy-MM-dd" />
        </b-col>
        <b-col>
          제조일
          <DxDateBox :value="now" display-format="yyyy-MM-dd" />
        </b-col>
        <b-col>
          자재
          <b-form-group>
            <DxDropDownBox :drop-down-options="dropDownOptions">
              <template #content="{ }">
                <DxDataGrid
                  :data-source="orders"
                  :show-borders="true"
                  height="400"
                  :show-column-lines="false"
                >
                  <DxSearchPanel :visible="true" />
                  <DxColumn data-field="PO_NO" caption="코드" width="100" />
                  <DxColumn data-field="PONO" caption="품목" width="450" />
                  <DxColumn data-field="PO_NO" caption="규격" width="100" />
                  <DxScrolling column-rendering-mode="Horizontal " />
                </DxDataGrid>
              </template>
            </DxDropDownBox>
          </b-form-group>
        </b-col>
        <b-col>
          자재타입
          <DxSelectBox
            :data-source="wkwotype"
            display-expr="syscodeTable"
            value-expr="syscodeTable"
            :search-enabled="true"
          />
        </b-col>
      </b-row>
      <p />
      <b-row>
        <b-col>
          Lot ID
          <DxTextBox />
        </b-col>
        <b-col cols="1">
          LOT 생성 수량
          <DxNumberBox :read-only="true" :value="1" />
        </b-col>
        <b-col cols="1">
          <DxCheckBox :value="false" />
          LOT 시퀀스
        </b-col>
        <b-col cols="1">
          입고수량
          <DxSelectBox
            :data-source="dlqrhcount"
            display-expr="syscodeTable"
            value-expr="syscodeTable"
            :search-enabled="true"
          />
        </b-col>
        <b-col cols="1">
          용기 수량
          <DxNumberBox :value="0" />
        </b-col>
        <b-col cols="2">
          수량
          <DxNumberBox :value="0.0" format="#0.## " />
        </b-col>
        <b-col>
          단위
          <DxSelectBox :read-only="true" />
        </b-col>
      </b-row>
      <p />
      <b-row>
        <b-col>
          입고창고
          <DxSelectBox
            data-source="wkwotype"
            display-expr="syscodeTable"
            value-expr="syscodeTable"
          />
        </b-col>
        <b-col>
          세부구역
          <DxSelectBox
            data-source="wkwotype"
            display-expr="syscodeTable"
            value-expr="syscodeTable"
          />
        </b-col>
        <b-col>
          공급사
          <DxSelectBox
            data-source="wkwotype"
            display-expr="syscodeTable"
            value-expr="syscodeTable"
          />
        </b-col>
        <b-col cols="2">
          <b-form-group
            description
            label="PO No."
            label-for="PO_NO"
            label-align-lg="right"
            label-cols-lg="4"
            label-size="lg"
            label-cols-md
          >
            <DxDropDownBox :drop-down-options="dropDownOptions">
              <template #content="{ }">
                <DxDataGrid
                  :data-source="orders"
                  :show-borders="true"
                  height="300"
                  :show-column-lines="false"
                >
                  <DxSearchPanel :visible="true" />
                  <DxColumn data-field="PO_NO" caption="PoNo" width="100" />
                  <DxColumn data-field="PONO" caption="LINE" width="100" />
                  <DxColumn data-field="PONO" caption="자재" width="100" />
                  <DxColumn data-field="PONO" caption="납기일" width="100" />
                  <DxColumn data-field="PONO" caption="수량" width="100" />
                  <DxColumn data-field="PONO" caption="입고 수량" width="100" />
                  <DxColumn data-field="PONO" caption="잔량" width="100" />
                  <DxColumn data-field="PONO" caption="단위" width="100" />
                  <DxScrolling column-rendering-mode="Horizontal " />
                </DxDataGrid>
              </template>
            </DxDropDownBox>
          </b-form-group>
        </b-col>
        <b-col cols="1">
          <DxCheckBox :value="true" />
          ERP
        </b-col>
      </b-row>
      <p />
      <b-row>
        <b-col>
          비고
          <DxTextBox />
        </b-col>
      </b-row>
    </b-card-body>
    <b-card-footer>
      <b-row>
        <b-col>
          <b-button variant="outline-danger" style="float: right;">
            <b-icon icon="backspace" height="18" />
            clear
          </b-button>
          <b-button variant="outline-success" style="float: right;">
            <b-icon icon="plus" />
            추가
          </b-button>
        </b-col>
      </b-row>
    </b-card-footer>
  </b-card>
</template>
<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxSelectBox from 'devextreme-vue/select-box'
import DxDateBox from 'devextreme-vue/date-box'
import { DxCheckBox } from 'devextreme-vue/check-box'
import DxNumberBox from 'devextreme-vue/number-box'
import DxDropDownBox from 'devextreme-vue/drop-down-box'
import httpService from '@/service/httpService'
import {
  DxDataGrid,
  DxColumn,
  DxScrolling,
  DxSearchPanel,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxTextBox,
    DxSelectBox,
    DxDateBox,
    DxCheckBox,
    DxNumberBox,
    DxDropDownBox,
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxSearchPanel,
  },

  data() {
    return {
      displayData: {},
      now: new Date(),
      dropDownOptions: { width: 700 },
      wkwotype: [],
      dlqrhcount: [],
    }
  },

  mounted() {
    this.getSource()
  },

  clear() {},

  methods: {
    async getSource() {
      this.wkwotype = await httpService.Get_Param('/api/syscode-data/select', {
        params: {
          bindvalues: {
            syscodeTable: window.sessionStorage.getItem('userSyscodeTable'),
            SYSCODE_TABLE: 'MAT_TYPE',
            USE_FLAG: 'Y',
          },
        },
      })

      this.a = await httpService.Get_Param('/api/syscode-data/select', {
        params: {
          bindvalues: {
            syscodeTable: window.sessionStorage.getItem('userSyscodeTable'),
            SYSCODE_TABLE: 'MAT_TYPE',
            USE_FLAG: 'Y',
          },
        },
      })

      this.s = await httpService.Get_Param('/api/syscode-data/select', {
        params: {
          bindvalues: {
            syscodeTable: window.sessionStorage.getItem('userSyscodeTable'),
            SYSCODE_TABLE: 'MAT_TYPE',
            USE_FLAG: 'Y',
          },
        },
      })

      this.d = await httpService.Get_Param('/api/syscode-data/select', {
        params: {
          bindvalues: {
            syscodeTable: window.sessionStorage.getItem('userSyscodeTable'),
            SYSCODE_TABLE: 'MAT_TYPE',
            USE_FLAG: 'Y',
          },
        },
      })

      this.f = await httpService.Get_Param('/api/syscode-data/select', {
        params: {
          bindvalues: {
            syscodeTable: window.sessionStorage.getItem('userSyscodeTable'),
            SYSCODE_TABLE: 'MAT_TYPE',
            USE_FLAG: 'Y',
          },
        },
      })
    },
  },
}
</script>
<style></style>
