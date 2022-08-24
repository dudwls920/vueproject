<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <b-col
            cols="12"
            class="mb-2"
          >
            <b>반품 정보</b>
            <b-button
              style="float: right;margin-left:5px;position:relative;bottom:10px;"
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
              반품일
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
              사번
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox />
            </div>
            <div class="dx-field-label">
              반품처
            </div>
            <div class="dx-field-value">
              <DxSelectBox
                :data-source="purchasePlace"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              비고
            </div>
            <div class="dx-field-value">
              <DxTextBox
                style="width:144%;position:relative;right:44%;"
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
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  components: {
    DxTextBox, DxDateBox, DxSelectBox,
  },

  data() {
    return {
      now: new Date(),
      purchasePlace: ['aa', 'bb', 'cc'],
    }
  },

  methods: {
  },
}
</script>

<style>

</style>
