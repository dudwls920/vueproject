<template>
  <div>
    <b-card title="샤인소프트 VueJS UI Starter Kit 🚀">
      <b-card-text>All the best for your new project.</b-card-text>
      <b-card-text>Check out ShineSoft's <b-link
        href="http://one-factory.shinesoft.co.kr/"
        target="_blank"
      >
        MES Demo site
      </b-link>, <b-link
        href="http://one-factory.shinesoft.co.kr:8080/"
        target="_blank"
      >
        MCS Demo site
      </b-link>,  to understand where to go from here and how to use our template.</b-card-text>
    </b-card>
    <b-card title="For Development">
      <b-card-text>초기 Starter Kit 화면 시작을 위한 기본 로직이 주석처리 되어 있습니다.</b-card-text>
      <b-card-text><b>// Shine VUE Starter Kit</b> > 해당 주석을 검색하여 수정 바랍니다.</b-card-text>
    </b-card>
    <b-card
      no-body
      class="header-shadow"
    >
      <ShineHeader
        text="Shine Card Example - Header"
      />
      <b-card-body>
        <b-card-text>This is an example of Shine Card</b-card-text>
        <b-card-text>Current text is on <b>b-card-body</b> area</b-card-text>
      </b-card-body>
      <ShineFooter
        text="Footer"
        icon="StarIcon"
      />
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import ShineHeader from '@/layouts/components/ShineCardHeader.vue'
import ShineFooter from '@/layouts/components/ShineCardFooter.vue'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    ShineHeader,
    ShineFooter,
  },
}
</script>

<style>

</style>
