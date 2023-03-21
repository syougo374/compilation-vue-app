<template>
  <button :class="btnColor" class="button-styles">{{ btnName }}</button>

</template>
<script>
  export default {
    data(){
      return{
        buttonStyles:[
          "shadow-lg",
          "bg-pink-500",
          "shadow-pink-500/50",
          "text-white",
          "rounded",
          "px-2",
          "py-1"
        ]
      }
    },
    props: {
      btnColor: {
        type: String,
        default: "bg-pink-500",
      },
      btnName: {
        type: String,
        default: "登録",
      }
    }
  }
</script>