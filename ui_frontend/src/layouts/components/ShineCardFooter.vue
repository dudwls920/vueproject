<template>
  <b-card-footer
    style="padding: 9px 10px;
          text-align: right;"
  >
    <b-button
      style="text-align:center;"
      variant="outline-primary"
      class="btn-icon"
      pill
      @click="onSearchClick"
    >
      <feather-icon :icon="icon" />
      {{ text }}
    </b-button>
  </b-card-footer>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
    onSearchClick: { type: Function, required: true },
  },
}
</script>

<style>

</style>
