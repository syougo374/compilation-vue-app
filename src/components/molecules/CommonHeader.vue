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

    <slot name="lifullHomes"></slot>
    <div class="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3">
      <CommonHistroy></CommonHistroy>
      <CommonLike></CommonLike>
      <RouterLink :class="hiddenStyle" exact active-class="actice" class="links" style="margin: auto 0;" to="/userInfo">UserInfo</RouterLink>
      <RouterLink :class="hiddenStyle" exact active-class="actice" class="links" style="margin: auto 0;" to="/index">Index</RouterLink>
      <RouterLink :class="hiddenStyle" exact active-class="actice" class="links" style="margin: auto 0;" to="/lifullHomes">lifullHomes</RouterLink>
      <CommonMenuBar class="lg:hidden md:hidden"></CommonMenuBar>
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
      hiddenStyle: [
        "hidden",
        "lg:inline-block",
        "md:inline-block",
      ]
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
  .links {
    color: blue;
  }
  .actice {
    background-color: rgba(249, 168, 102, 0.3);
    color: green
  }
</style>