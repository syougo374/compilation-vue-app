<template>
  <div class="h-2 bg-orange-500"></div>
  <header class="flex justify-between justify-center items-center">
    <div class="header-title flex justify-center items-center">
      <img class="h-10 w-10 boject-contain" src="@/assets/images/lifullIcon.png" alt="icon">
      <div>
        <p class="text-orange-500">LIFULL</p>
        <h1 class="text-orange-500 text-3xl font-serif italic">{{ headerTitle }}</h1>
      </div>
    </div>
    <CommonMenuBar class="test"></CommonMenuBar>
  </header>
</template>

<script>
import CommonMenuBar from '@/components/molecules/CommonMenuBar'
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
  },
  methods: {

  }
}

</script>

<style scoped>
  header {
    margin: 0 5%;
  }
  h1 {
    margin: 0;
  }
  .test {
    left: 90%;
  }
</style>