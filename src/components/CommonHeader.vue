<template>
  <header>
    <h1 class="text-3xl font-serif italic">{{ headerTitle }}</h1>
  </header>
  <btnCom class="mr-3 mt-3" @click="firstClick" btn-name="clickして1"></btnCom>
  <btnCom class="mr-3 mt-3" @click="secondClick" btn-name="clickして2"></btnCom>
  <btnCom class="mr-3 mt-3" @click="theadClick" btn-name="clickして3"></btnCom>
  <h1 class="text-3xl">{{ msg }}</h1>
</template>

<script>
import btnCom from '@/plugins/atoms/buttons/BPrimaryBtn.vue'
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
    btnCom,
  },
  methods: {
    firstClick(){
      this.msg='first';
    },
    secondClick(){
      this.msg='second';
    },
    theadClick(){
      this.msg='thead';
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