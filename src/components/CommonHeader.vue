<template>
  <header>
    <h1>{{ headerTitle }}</h1>
  </header>
</template>

<script>
export default{
  data(){
    return {
    }
  },
  props: {
    headerTitle: {
      type: [String],
      default: 'default header',
    }
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
</style>