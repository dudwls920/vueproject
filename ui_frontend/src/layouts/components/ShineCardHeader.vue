<template>
  <b-card-header style="padding:0px; top:-20px; left:10px;">
    <div class="custom-header">
      <feather-icon
        class="mr-1"
        :icon="icon"
        size="25"
        style="margin-right:0px !important;"
      />
      <span style="margin-left:3%; vertical-align: middle">
        {{ text }}
      </span>
    </div>
  </b-card-header>
</template>

<script>
export default {
  props: {
    text: String,

    icon: String,
  },
}
</script>

<style>

</style>
