<template>
  <div>
    <b-card>
      <b-row>
        <b-col
          cols="12"
        >
          <b>고객사 목록</b>
        </b-col>
        <b-col>
          <div class="form">
            <dx-tree-view
              :create-children="createChildren"
              :root-value="''"
              :height="640"
              data-structure="plain"
              @item-click="selectItem"
            />
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>

import DxTreeView from 'devextreme-vue/tree-view'

export default {
  components: {
    DxTreeView,
  },
  methods: {
    createChildren(parent) {
      const parentId = parent ? parent.itemData.id : ''

      return fetch(`http://localhost:9090/api/Ns/find-all?parentId=${parentId}`)
        .then(response => response.json())
        .catch(() => { throw new Error('Data Loading Error') })
    },

    selectItem(e) {
      console.log(e)
      this.$emit('selectItem', e.itemData)
    },
  },
}
</script>

<style>

</style>
