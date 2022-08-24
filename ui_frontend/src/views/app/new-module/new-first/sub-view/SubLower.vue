<template>
  <b-card>
    <b-card-header>
      <ShineCardHeader
        text="bcard Lower header"
        icon="ArrowRightIcon"
      />
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col
          cols="10"

          style="background-color: red;"
        >
          Lower 1
          <DxDataGrid
            ref="dataGridRef"
            :show-borders="false"
            :show-row-lines="false"
            :show-column-lines="false"
            :show-column-headers="true"
            :word-wrap-enabled="true"
            :data-source="displayData"
            :column-resizing-mode="'widget'"
            :row-alternation-enabled="true"
            class="mb-1"
            @row-inserted="onRowInserted"
            @row-updated="onRowUpdated"
            @row-removed="onRowRemoved"
          >
            <DxScrolling mode="infinite" />
            <DxEditing
              :allow-updating="true"
              :allow-deleting="true"
              :allow-adding="true"
              mode="row"
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
              data-field="cellId"
              caption="Cell ID"
            />
          </DxDataGrid>
        </b-col>
        <b-col
          cols="2"
          style="background-color: orange;"
        >
          Lower 2
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
              Lower 3 / class="mb-1" style="background-color: green; color:
              white;"
            </b-col>
          </b-row>
          <b-row>
            <b-col class="ml-3">
              cols="8"/ class="ml-3"
            </b-col>
          </b-row>
        </b-col>
        <b-col
          cols="4"
          style="background-color: Yellow;"
        >
          <b-row>
            <b-col class="mt-1">
              Lower 4/class="mt-1"
            </b-col>
          </b-row>
          <b-row>
            <b-col style="background-color: lightYellow; color: black;">
              cols="4" / style="background-color: lightYellow; color: black;"
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  DxDataGrid, DxColumn, DxScrolling, DxEditing,
} from 'devextreme-vue/data-grid'
import ShineCardHeader from '@/layouts/components/ShineCardHeader.vue'

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxEditing,
    ShineCardHeader,
  },
  props: {
    shelfCellInfo: Array,
    selectedName: String,
  },
  data() {
    return {
      displayData: [],
    }
  },
  watch: {
    selectedName() {
      this.displayData = this.shelfCellInfo.filter(info => info.name === this.selectedName)
    },
    shelfCellInfo() {
      this.displayData = this.shelfCellInfo
    },
  },
  methods: {
    onRowInserted(e) {
      this.$emit('rowInserted', e.data)
    },
    onRowUpdated(e) {
      this.$emit('rowUpdated', e.data)
    },
    onRowRemoved(e) {
      this.$emit('rowRemoved', e.data)
    },
  },
}
</script>

<style></style>
