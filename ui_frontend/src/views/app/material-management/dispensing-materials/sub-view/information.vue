<template>
  <div>
    <b-card>
      <b-row>
        <b-col
          cols="12"
          class="mb-2"
        >
          <b>자재 불출 정보</b>
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
        <b-col
          :col-count="2"
          :col-span="2"
        >
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                불출일
              </div>
              <div
                class="dx-field-value"
                style="padding-right:10px;"
              >
                <DxDateBox
                  :value="now"
                  type="date"
                />
              </div>
              <div class="dx-field-label">
                유저
              </div>
              <div class="dx-field-value">
                <DxTextBox
                  v-model="formData.lotQuantity"
                  :read-only="true"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                요청수량
              </div>
              <div
                class="dx-field-value"
                style="padding-right:10px;"
              >
                <DxTextBox
                  v-model="formData.lotQuantity"
                  :read-only="true"
                />
              </div>
              <div class="dx-field-label">
                불출수량
              </div>
              <div class="dx-field-value">
                <DxTextBox
                  v-model="formData.lotQuantity"
                  :read-only="true"
                />
              </div>
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                불출 Area
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.inspectionStatus"
                />
              </div>
              <div class="dx-field-label" />
              <div class="dx-field-value" />
            </div>
          </div>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                비고
              </div>
              <div
                class="dx-field-value"
              >
                <DxTextArea
                  v-model="formData.note"
                  style="width:133%;position:relative;right:33%;"
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
import DxDateBox from 'devextreme-vue/date-box'
import DxTextArea from 'devextreme-vue/text-area'
import DxSelectBox from 'devextreme-vue/select-box'
import DxTextBox from 'devextreme-vue/text-box'

export default {
  components: {
    DxDateBox, DxTextArea, DxSelectBox, DxTextBox,
  },

  data() {
    return {
      now: new Date(),
      formData: {
        id: {
          lotid: '',
        },
      },
    }
  },

  methods: {
    onInserted(e) {
      console.log(e)
      this.$emit('inserted', this.formData)
    },

    clear() {
      this.formData.note = ''
    },
  },
}
</script>

<style>

</style>
