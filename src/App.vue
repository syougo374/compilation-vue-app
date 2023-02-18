<template>
  <router-view></router-view>
  <CommonFooter></CommonFooter>
</template>

<script>
import CommonFooter from '@/components/molecules/CommonFooter'
export default {
  name: 'App',
  components: {
    CommonFooter,
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
