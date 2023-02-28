<template>
  <input type="text" v-model="test" :style="styles">
  <input:button type="button"
                :class="bgColor" 
                class="shadow-lg shadow-teal-500/50 text-white rounded px-2 py-1"
                @click="test = ''"
  >btn</input:button>
  <p :style="styles">{{ test }}</p>
</template>

<script>
  export default {
    data (){
      return {
        test: '',
        styles: {
          'font-size': this.$props.fontSize,
          color: this.$props.color,
        }
      }
    },
    props: {
      fontSize:{
        type: String,
        default: '10px',
      } ,
      color: {
        type: String,
        default: 'red'
      },
      bgColor: {
        type: String,
        default: 'bg-teal-500'
      }
    },
  }
</script>

<style lang="scss">

</style>
