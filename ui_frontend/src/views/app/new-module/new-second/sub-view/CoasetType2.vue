<template>
  <div
    style="height:550px;"
  >
    <table style="margin:0px auto;color:black;">
      <tbody>
        <tr>
          <td class="col1">
&nbsp;
          </td>
          <td class="col2">
&nbsp;
          </td>
          <td class="col3">
&nbsp;
          </td>
          <td class="col4">
&nbsp;
          </td>
          <td class="col5">
&nbsp;
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td
            colspan="2"
            class="right"
            style="font-size:10px;"
          >
            nepes corp.<br> 충북 음성군 삼성면 금일로 965번길 105<br> TEL : 043-877-3040<br> FAX : 043-877-3042
          </td>
        </tr>
        <tr>
          <td
            colspan="5"
            class="title"
          >
            Certificate of Analysis
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            colspan="2"
            class="borderStyle lotInfo lotTitle"
          >
            Customer
          </td>
          <td
            colspan="3"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.CUSTOMER_ID }}
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            colspan="2"
            class="borderStyle lotInfo lotTitle"
          >
            Product Name
          </td>
          <td
            colspan="3"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.PART_ID }}
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            colspan="2"
            class="borderStyle lotInfo lotTitle"
          >
            Quantity
          </td>
          <td
            colspan="3"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.LOT_QTY }}
          </td>
        </tr>
        <tr class="borderStyle lotInfo">
          <td
            colspan="2"
            class="borderStyle lotTitle"
          >
            Lot Number
          </td>
          <td
            colspan="3"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.LOT_NUMBER }}
          </td>
        </tr>
        <tr class="borderStyle lotInfo">
          <td
            colspan="2"
            class="borderStyle lotTitle"
          >
            Manufacturing Date
          </td>
          <td
            colspan="3"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.MANUFACTURE_DT }}
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            colspan="2"
            class="borderStyle lotInfo lotTitle"
          >
            Inspection Date
          </td>
          <td
            colspan="3"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.QC_DT }}
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr class="borderStyle">
          <td
            colspan="2"
            class="leftBorder center coaHstSub"
          >
            Item
          </td>
          <td class="borderStyle center coaHstSub">
            Unit
          </td>
          <td class="borderStyle center coaHstSub">
            Specification
          </td>
          <td class="borderStyle center coaHstSub">
            Inspection Data
          </td>
        </tr>
        <tr
          v-for="(row, index) in list"
          :key="index+'l'"
          class="borderStyle "
        >
          <td
            class="leftBorder padding"
            style="font-size:11px;"
          >
            &nbsp;&nbsp;&nbsp;{{ row.MAIN_ITEM }}
          </td>
          <td
            class="center padding"
            style="font-size:11px;"
          >
            {{ row.SUB_ITEM }}
          </td>
          <td
            class="borderStyle center padding"
            style="font-size:11px;"
          >
            {{ row.UNIT }}
          </td>
          <td
            class="borderStyle center padding"
            style="font-size:11px;"
          >
            {{ row.SPEC }}
          </td>
          <td
            class="borderStyle center padding"
            style="font-size:11px;"
          >
            {{ row.DATA }}
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td style="text-align:right;font-size:12px;">
            품질보증팀장
          </td>
        </tr>
        <tr>
          <td
            colspan="4"
            style="font-size:11px;"
          >
            상기의 측정결과는 사실과 틀림이 없음을 보증함. <br>
            I certify the above statement of qualify to be true and correct. <br>
            Approved by the manager of quality assurance team <br>
            <br>
            CYANTEK corporation  &nbsp;&nbsp;&nbsp; Tel : +1 (510) 651-3341 &nbsp; Fax : +1 (510) 651-3398
            <br>
            Manufacturer : nepes corporation &nbsp;&nbsp;&nbsp; Fax : +82 (43) 877-3040 &nbsp; Fax : +82 (43) 877-3042
          </td>
          <td>
            <img
              v-if="lotData.CONFIRM_FLAG === 'Y'"
              style="width:70px;height:70px;float:right;"
              :src="signData.signImagePath"
            >
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import httpService from '@/service/httpService'

export default {
  props: {
    mainLotData: Object,
    qcDatas: Array,
  },
  data() {
    return {
      lotData: {},
      list: [],
      signData: {},
    }
  },
  watch: {
    mainLotData(e) {
      this.lotData = e
    },
    qcDatas(e) {
      this.list = e
      this.getSignSource()
    },
  },
  methods: {
    async getSignSource() {
      const response = await httpService.Get_Param('/api/frmuser/select', {
        params: {
          id: {
            id: window.sessionStorage.getItem('user-id'),
          },
        },
      })
      this.signData = response
    },
  },
}
</script>

<style scoped>
.borderStyle {
  border:1px solid black;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.center {
  text-align: center;
}
.leftBorder {
  border-left: 1px
}
.title {
  text-align: center;
  font-size: 25px;
  text-decoration: underline;
  font-weight: bold;
}
.lotInfo {
  text-indent: 10px;
}
.lotInfoSub {
  text-indent: 10px;
}
.col1 {
  width : 150px;
}
.col2 {
  width : 100px
}
.col3 {
  width : 80px
}
.col4 {
  width : 200px
}
.col5 {
  width : 200px
}
.lotTitle{
  background-color: #e0e0e0;
  font-weight: bold;
  height: 25px;
}
.coaHstSub{
  background-color: #c0c0c0;
  height: 30px;
  font-weight: bold;
}
.padding{
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
