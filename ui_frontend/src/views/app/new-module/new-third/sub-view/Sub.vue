<template>
  <b-card>
    <b-row
      class="mb-3"
    >
      <b-col>
        <DxDataGrid
          height="500px"
          :data-source="dataSource"
        >
          <DxColumn
            data-field="id"
            caption="id"
          />
          <DxColumn
            data-field="name"
            caption="name"
          />
          <DxColumn
            data-field="spec"
            caption="spec"
          />
        </DxDataGrid>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  DxDataGrid, DxColumn,
} from 'devextreme-vue/data-grid'

export default {
  components: {
    DxDataGrid,
    DxColumn,
  },
  props: {
    formData: Object,
    dataSource: Array,
  },
  data() {
    return {
      displayData: {},
    }
  },
  watch: {
    formData(newVal) {
      console.log('서브뷰', newVal)
    },
  },

}
</script>

<style>

</style>
