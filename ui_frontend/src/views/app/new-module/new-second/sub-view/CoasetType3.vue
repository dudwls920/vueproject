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
          <td class="col6">
          &nbsp;
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td
            colspan="2"
            class="right"
            style="font-size:10px;"
          >
            nepes corp. <br> 105, Geumil-Ro 965beon-Gil, <br> Samseong-Myeon, Eumseong-Gun, <br>Chungbuk, Korea <br> TEL : 82-43-877-3040 <br> FAX : 82-43-877-3042
          </td>
        </tr>
        <tr>
          <td
            colspan="6"
            class="title"
          >
            Certificate of Analysis
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            class="borderStyle lotInfo lotTitle"
            colspan="2"
          >
            Customer
          </td>
          <td
            colspan="1"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.CUSTOMER_ID }}
          </td>
          <td
            class="borderStyle lotInfo lotTitle"
            colspan="2"
          >
            Material Code
          </td>
          <td
            class="lotInfoSub"
            style="font-size:12px;"
            colspan="1"
          >
            {{ lotData.CUSTOMER_ID }}
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            class="borderStyle lotInfo lotTitle"
            colspan="2"
          >
            Product Name
          </td>
          <td
            colspan="1"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.PART_ID }}
          </td>
          <td
            class="borderStyle lotInfo lotTitle"
            colspan="2"
          >
            HEI Spec. No.
          </td>
          <td
            class="lotInfoSub"
            style="font-size:12px;"
            colspan="1"
          >
            {{ lotData.PART_ID }}
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            class="borderStyle lotInfo lotTitle"
            colspan="2"
          >
            Quantity
          </td>
          <td
            colspan="1"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.LOT_QTY }}
          </td>
        </tr>
        <tr class="borderStyle lotInfo">
          <td
            class="borderStyle lotTitle"
            colspan="2"
          >
            Lot Number
          </td>
          <td
            colspan="1"
            class="lotInfoSub"
            style="font-size:12px;"
          >
            {{ lotData.LOT_NUMBER }}
          </td>
          <td
            class="borderStyle lotTitle"
            colspan="2"
          >
            P/O No.
          </td>
          <td
            class="lotInfoSub"
            style="font-size:12px;"
            colspan="1"
          >
            {{ lotData.LOT_NUMBER }}
          </td>
        </tr>
        <tr class="borderStyle lotInfo">
          <td
            class="borderStyle lotTitle"
            colspan="2"
          >
            Manufacturing Date
          </td>
          <td
            class="lotInfoSub"
            style="font-size:12px;"
            colspan="1"
          >
            {{ lotData.MANUFACTURE_DT }}
          </td>
          <td
            class="borderStyle lotTitle"
            colspan="2"
          >
            Shelf Life
          </td>
          <td
            class="lotInfoSub"
            style="font-size:12px;"
            colspan="1"
          >
            {{ lotData.MANUFACTURE_DT }}
          </td>
        </tr>
        <tr class="borderStyle">
          <td
            class="borderStyle lotInfo lotTitle"
            colspan="2"
          >
            Inspection Date
          </td>
          <td
            colspan="1"
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
          <td>&nbsp;</td>
        </tr>
        <tr class="borderStyle">
          <td
            class="leftBorder center coaHstSub"
            colspan="2"
          >
            Item
          </td>
          <td class="borderStyle center coaHstSub">
            Unit
          </td>
          <td
            class="borderStyle center coaHstSub"
            colspan="2"
          >
            Specification
          </td>
          <td class="rightBorder center coaHstSub">
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
            colspan="2"
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
          <td
            colspan="3"
            style="text-align:left;font-size:9px;"
          >
            I certify the above statement of quality to be true and correct.
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td
            colspan="1"
            style="text-align:center;font-size:9px;"
          >
            Representative
          </td>
        </tr>
        <tr>
          <td
            colspan="3"
            style="text-align:left;font-size:9px;vertical-align: top; "
          >
            Approved by the manager of quality assurance team
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <img
              v-if="lotData.CONFIRM_FLAG === 'Y'"
              style="width:70px;height:70px;display: block; margin: 0px auto;"
              :src="signData.signImagePath"
            >
          </td>
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
  width : 100px;
}
.col2 {
  width : 100px;
}
.col3 {
  width : 150px;
}
.col4 {
  width : 100px;
}
.col5 {
  width : 100px;
}
.col6 {
  width : 150px;
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
