<template>
  <b-card>
    <b-card-header>
      <ShineCardHeader
        text="bcard Upper header"
        icon="ArrowRightIcon"
      />
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col
          cols="3"
          style="background-color: red;"
        >
          Upper 1
          Search
        </b-col>
        <b-col
          cols="9"
          style="background-color: orange;"
        >
          Upper 2
          <DxDataGrid
            ref="dataGridRef"
            :show-borders="false"
            :show-row-lines="false"
            :show-column-lines="false"
            :show-column-headers="true"
            :word-wrap-enabled="true"
            :data-source="shelfSpec"
            :focused-row-enabeld="true"
            :column-resizing-mode="'widget'"
            :row-alternation-enabled="true"
            :selection="{ mode: 'single' }"
            key-expr="id"
            class="mb-1"
            @selection-changed="onSelectionChanged"
          >
            <DxScrolling mode="infinite" />
            <DxColumn
              alignment="left"
              data-field="id"
              caption="id"
              :visible="false"
            />
            <DxColumn
              alignment="center"
              data-field="dot"
              :width="50"
              cell-template="dotTemplate"
            />
            <template #dotTemplate="{}">
              <b-row>
                <b-col style="padding: 5px 0px 5px 5px;">
                  *
                </b-col>
              </b-row>
            </template>
            <DxColumn
              alignment="center"
              data-field="name"
              caption="Shelf Name"
            />
            <DxColumn
              alignment="center"
              data-field="spec"
              caption="spec"
            />
          </DxDataGrid>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="8"
          style="background-color: lightgreen;"
        >
          <b-row>
            <b-col
              class="mb-1"
              style="background-color: green; color: white;"
            >
              Upper 3 /   class="mb-1"  style="background-color: green; color: white;"
            </b-col>
          </b-row>
          <b-row>
            <b-col
              class="ml-3"
            >
              cols="8"/  class="ml-3"
            </b-col>
          </b-row>
        </b-col>
        <b-col
          cols="4"
          style="background-color: Yellow;"
        >
          <b-row>
            <b-col
              class="mt-1"
            >
              Upper 4/class="mt-1"
            </b-col>
          </b-row>
          <b-row>
            <b-col
              style="background-color: lightYellow; color: black;"
            >
              cols="4" / style="background-color: lightYellow; color: black;"
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import { DxDataGrid, DxColumn, DxScrolling } from 'devextreme-vue/data-grid'
import ShineCardHeader from '@/layouts/components/ShineCardHeader.vue'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    ShineCardHeader,
  },
  props: {
    shelfSpec: Array,
  },
  data() {
    return {
      selectedName: '',
    }
  },
  methods: {
    onSelectionChanged(e) {
      this.selectedName = e.selectedRowsData[0].name
      this.$emit('selectedName', this.selectedName)
    },
  },
}
</script>

<style>
</style>
