<template>
  <div class="h-2 bg-orange-500"></div>
  <header class="flex justify-between">
    <div class="header-title">
      <p class="text-orange-500">LIFULL</p>
      <h1 class="text-orange-500 text-3xl font-serif italic">{{ headerTitle }}</h1>
    </div>
  </header>
  <CommonMenuBar class="test mr-5 absolute top-1.5"></CommonMenuBar>
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
  h1 {
    margin: 0;
  }
  .test {
    left: 90%;
  }
</style>