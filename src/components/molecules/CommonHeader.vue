<template>
  <header class="flex justify-between">
    <h1 class="text-3xl font-serif italic">{{ headerTitle }}</h1>
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
  header {
    background-color: pink;
  }
  h1 {
    margin: 0;
  }
  .test {
    left: 90%;
  }
</style>