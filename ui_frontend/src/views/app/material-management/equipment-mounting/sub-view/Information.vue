<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <b-col
            cols="12"
            class="mb-2"
          >
            <b>설비 정보</b>
            <hr>
          </b-col>
          <div class="dx-field">
            <div class="dx-field-label">
              작업일
            </div>
            <div
              class="dx-field-value"
              style="padding-right:20px;"
            >
              <DxDateBox
                :value="now"
                type="date"
                style="position:relative;right:35%;"
              />
            </div>
            <div class="dx-field-label">
              사번
            </div>
            <div
              class="dx-field-value"
            >
              <DxTextBox
                style="position:relative;width:145%;right:45%;"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">
              Lot Id
            </div>
            <div
              class="dx-field-value"
              style="padding-right:10px;"
            >
              <DxTextBox
                :data-source="dataSource"
                data-field="id.lotId"
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
                :data-source="dataSource"
                data-field="materialCode"
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
              <DxTextBox />
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
      now: new Date(),
      displayData: {},
    }
  },

}
</script>

<style>

</style>
