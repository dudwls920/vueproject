<template>
  <div>
    <b-card>
      <b-row>
        <b-col
          cols="12"
          class="mb-2"
        >
          <b>자재 Lot 생성정보</b>
          <b-button
            style="float: right;margin-left:5px;position:relative;bottom:10px;"
            @click="clear"
          >
            취소
          </b-button>
          <b-button
            variant="primary"
            style="float: right;position:relative;bottom:10px;"
            @click="onInserted"
          >
            추가
          </b-button>
          <hr>
        </b-col>
        <b-col>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                Lot id
              </div>
              <div
                class="dx-field-value"
              >
                <DxTextBox
                  v-model="formData.id.lotId"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                입고일
              </div>
              <div class="dx-field-value">
                <DxDateBox
                  v-model="formData.deliveryDate"
                  :value="now"
                  type="date"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                Plant
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.plant"
                  :data-source="['NS2']"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                자재코드
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.materialCode"
                  :data-source="materialCode"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                Rev No.
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.revNo"
                  :data-source="revNo"
                />
              </div>
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              설명
            </div>
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.explanation"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              자재타입
            </div>
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.materialType"
                :read-only="true"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              대분류
            </div>
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.mainCategory"
                :read-only="true"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              중분류
            </div>
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.middleClass"
                :read-only="true"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              규격
            </div>
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.standard"
                :read-only="true"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              단위
            </div>
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.unit"
                :read-only="true"
              />
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                Lot 수량
              </div>
              <div class="dx-field-value">
                <DxNumberBox
                  v-model="lotNumber"
                  :show-spin-buttons="true"
                  :min="0"
                />
              </div>
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label" />
            <div class="dx-field-value">
              <DxTextBox
                v-model="formData.lotQuantity"
              />M
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                수입검사 여부
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.inspectionStatus"
                  :data-source="inspectionStatus"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                매입처
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.purchasePlace"
                  :data-source="purchasePlace"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                유효기간
              </div>
              <div class="dx-field-value">
                <DxDateBox
                  v-model="formData.validity"
                  :value="now"
                  type="date"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                비고
              </div>
              <div class="dx-field-value">
                <DxTextArea
                  v-model="formData.note"
                />
              </div>
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
import DxTextArea from 'devextreme-vue/text-area'
import DxSelectBox from 'devextreme-vue/select-box'
import DxNumberBox from 'devextreme-vue/number-box'

export default {
  components: {
    DxTextBox, DxDateBox, DxTextArea, DxSelectBox, DxNumberBox,
  },

  data() {
    return {
      now: new Date(),
      formData: {
        id: {
          lotId: '',
        },
        deliveryDate: '',
        plant: '',
        materialCode: '',
        revNo: '',
        explanation: '',
        materialType: '',
        mainCategory: '',
        middleClass: '',
        standard: '',
        unit: '',
        lotQuantity: '',
        inspectionStatus: '',
        purchasePlace: '',
        validity: '',
        note: '',
      },
      materialCode: ['product'],
      revNo: ['production'],
      lotNumber: 0,
      inspectionStatus: ['Y'],
      purchasePlace: ['aa'],
    }
  },

  watch: {
    lotNumber(val) {
      this.lotNumber = val
      this.formData.lotQuantity = val * 100
    },
  },

  methods: {
    onInserted() {
      this.$emit('inserted', this.formData)
    },

    clear() {
      this.formData.id.lotId = ''
      this.formData.explanation = ''
      this.formData.note = ''
    },
  },

}
</script>

<style>

</style>
