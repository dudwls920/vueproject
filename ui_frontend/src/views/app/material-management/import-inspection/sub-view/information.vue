<template>
  <div>
    <b-card>
      <b-row
        style="height:550px;"
      >
        <b-col
          cols="12"
          class="mb-2"
        >
          <b>수입검사 의뢰 정보</b>
          <b-button
            style="float: right;margin-left:5px;position:relative;bottom:10px;"
            @click="clear"
          >
            취소
          </b-button>
          <b-button
            variant="outline-primary"
            style="float: right;position:relative;bottom:10px;"
          >
            실행
          </b-button>
          <hr>
          <div
            class="mb-2"
          >
            <div class="dx-field">
              <div class="dx-field-label">
                요청일
              </div>
              <div class="dx-field-value">
                <DxDateBox
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
                Priority
              </div>
              <div class="dx-field-value">
                <DxSelectBox
                  v-model="formData.inspectionStatus"
                  :data-source="Priority"
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
import DxDateBox from 'devextreme-vue/date-box'
import DxTextArea from 'devextreme-vue/text-area'
import DxSelectBox from 'devextreme-vue/select-box'

export default {
  components: {
    DxDateBox, DxTextArea, DxSelectBox,
  },

  data() {
    return {
      now: new Date(),
      formData: {
        id: {
          lotid: '',
        },
      },
      Priority: ['일반', '우선순위'],
    }
  },

  methods: {
    clear() {
      this.formData.note = ''
    },
  },
}
</script>

<style>

</style>
