<template>
  <div class="h-2 bg-orange-500"></div>
  <header class="flex justify-between justify-center items-center">
    <div class="header-title flex justify-center items-center">
      <img class="h-10 w-10 boject-contain" src="@/assets/images/lifullIcon.png" alt="icon">
      <div class="ml-2">
        <p class="text-orange-500">LIFULL</p>
        <h1 class="text-orange-500 text-3xl font-serif italic">{{ headerTitle }}</h1>
      </div>
    </div>
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
    <div class="links grid grid-cols-3">
      <CommonHistroy></CommonHistroy>
      <CommonLike></CommonLike>
      <CommonMenuBar></CommonMenuBar>
    </div>
  </header>
</template>

<script>
import CommonMenuBar from '@/components/molecules/CommonMenuBar'
import CommonLike from '@/components/molecules/CommonLike'
import CommonHistroy from '@/components/molecules/CommonHistroy'
export default{
  data(){
    return {
      msg: "default",
    }
  },
  props: {
    headerTitle: {
      type: String,
      default: 'default header',
    }
  },
  components: {
    CommonMenuBar,
    CommonHistroy,
    CommonLike,
  },
  methods: {

  }
}

</script>

<style scoped lang="scss">
  header {
    margin: 0 5%;
  }
  h1 {
    margin: 0;
  }
  .sublinks{
    & > div {
      margin-right: 20px;
    }
    & > div > p{
      display: block;
      font-size: 12px;
      color: gray;
    }
  }
</style>