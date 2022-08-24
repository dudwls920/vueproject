<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <b-col
            cols="12"
            class="mb-2"
          >
            <b>보정 정보</b>
            <b-button
              style="float: right;margin-left:5px;position:relative;bottom:10px;"
              @click="clear"
            >
              취소
            </b-button>
            <b-button
              variant="primary"
              style="float: right;position:relative;bottom:10px;"
            >
              실행
            </b-button>
            <hr>
          </b-col>
          <div class="dx-field">
            <div class="dx-field-label">
              Lot Id
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                :value="lotid"
                :read-only="true"
              />
            </div>
            <div class="dx-field-label">
              자제 코드
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                :value="materialcode"
                :read-only="true"
              />
            </div>
            <div class="dx-field-label">
              설명
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                :value="explanation"
                :read-only="true"
              />
            </div>
            <div class="dx-field-label">
              규격
            </div>
            <div
              class="dx-field-value"
            >
              <DxTextBox
                :value="standard"
                :read-only="true"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              수량1
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                :value="lotquantity"
                :read-only="true"
              />
            </div>
            <div class="dx-field-label">
              변경 수량1
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                v-model="formData.na"
              />
            </div>
            <div class="dx-field-label">
              수량2
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                :read-only="true"
              />
            </div>
            <div class="dx-field-label">
              변경수량2
            </div>
            <div
              class="dx-field-value"
            >
              <DxTextBox
                v-model="formData.nb"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              작업일
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxDateBox
                :value="validity"
                type="date"
                :read-only="true"
              />
            </div>
            <div class="dx-field-label">
              사번
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                v-model="formData.pnumbers"
              />
            </div>
            <div class="dx-field-label" />
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            />
            <div class="dx-field-label" />
            <div
              class="dx-field-value"
            />
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              비고
            </div>
            <div class="dx-field-value">
              <DxTextBox
                :value="note"
                style="width:150%;position:relative;right:50%;"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'

export default {
  components: {
    DxTextBox, DxDateBox,
  },

  props: {
    formData: Object,
    dataSource: Array,
  },

  data() {
    return {
      displayData: {},
      lotid: '',
      materialcode: '',
      explanation: '',
      standard: '',
      lotquantity: '',
      note: '',
      validity: '',
    }
  },

  watch: {
    lotid() {
      this.lotid = this.dataSource.instance.lotid
    },
    materialcode() {
      this.materialcode = this.dataSource.instance.materialcode
    },
    explanation() {
      this.explanation = this.dataSource.instance.explanation
    },
    standard() {
      this.standard = this.dataSource.instance.standard
    },
    lotquantity() {
      this.lotquantity = this.dataSource.instance.lotquantity
    },
    note() {
      this.note = this.dataSource.instance.note
    },
  },

  methods: {
    clear() {
      this.formData.na = ''
      this.formData.nb = ''
      this.formData.pnumbers = ''
      this.note = ''
    },
  },
}
</script>

<style>

</style>
