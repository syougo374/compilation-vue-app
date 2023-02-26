<template>
  <!-- sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 動き確認用 -->
  <div class="w-full w-screen">
    <router-view></router-view>
    <CommonFooter></CommonFooter>
  </div>
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
    min-height: 100vh;
  }
</style>
