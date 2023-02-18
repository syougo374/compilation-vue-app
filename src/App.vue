<template>
  <CommonHeader header-title="a"></CommonHeader>
  <CommonFooter></CommonFooter>
</template>

<script>
import CommonHeader from '@/components/molecules/CommonHeader.vue';
import CommonFooter from '@/components/molecules/CommonFooter'
export default {
  name: 'App',
  components: {
    CommonHeader,
    CommonFooter,
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
