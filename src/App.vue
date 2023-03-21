<template>
  <!-- sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 動き確認用 -->
  <div class="w-full w-screen">
      <CommonHeader>
        <template v-slot:lifullHomes v-if='this.$route.path === "/lifullHomes"'>
          <div class="sublinks zero:hidden lg:inline-flex">
            <div>
              <p>借りる</p>
              <h3>賃貸</h3>
            </div>
            <div>
              <p>マンションを買う</p>
              <h3>新築  中古</h3>
            </div>
            <div>
              <p>一戸建を買う</p>
              <h3>新築 中古 土地 注文住宅</h3>
            </div>
            <div>
              <P>&nbsp;</P>
              <h3>売却査定 投資 引越し</h3>
            </div>
          </div>
        </template>
      </CommonHeader>
    <router-view></router-view>
    <!-- <CommonFooter></CommonFooter> -->
  </div>
</template>

<script>
// import CommonFooter from '@/components/molecules/CommonFooter'
import CommonHeader from '@/components/molecules/CommonHeader'
export default {
  name: 'App',
  components: {
    // CommonFooter,
    CommonHeader,
  },
  created(){
  }
}
</script>

<style>
  body {
    min-height: 100vh;
  }
</style>
