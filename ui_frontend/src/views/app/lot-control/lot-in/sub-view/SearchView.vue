<template>
  <b-card
    no-body
    class="header-shadow"
  >
    <b-card-body>
      <b-row>
        <b-col
          cols="3"
        >
          품목
          <DxSelectBox
            :show-clear-button="true"
            :data-source="searchview"
          />
        </b-col>
        <b-col
          cols="3"
        >
          입고일
          <DxDateBox
            :value="now"
            display-format="yyyy-MM-dd"
          />
        </b-col>
      </b-row>
    </b-card-body>
    <b-card-footer>
      <b-row>
        <b-col>
          <b-button
            pill
            variant="outline-primary"
            style="float: right;"
          >
            <feather-icon icon="SearchIcon" />
            search
          </b-button>
        </b-col>
      </b-row>
    </b-card-footer>
  </b-card>
</template>
<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxDateBox from 'devextreme-vue/date-box'

export default {
  components: {
    DxSelectBox,
    DxDateBox,
  },
  data() {
    return {
      now: new Date(),
      searchview: ['자재LOT생성정보'],
    }
  },
  methods: {

  },
}
</script>
<style></style>
