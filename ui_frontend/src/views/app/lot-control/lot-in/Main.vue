<template>
  <div>
    <b-row>
      <b-col>
        <SearchView />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <InfoView />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <InfoViewList />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SearchView from './sub-view/SearchView.vue'
import InfoView from './sub-view/InfoView.vue'
import InfoViewList from './sub-view/InfoViewList.vue'

export default {
  components: {
    SearchView,
    InfoView,
    InfoViewList,
  },

}
</script>

<style>

</style>
