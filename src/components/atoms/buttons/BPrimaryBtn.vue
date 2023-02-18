<template>
  <button class="shadow-lg bg-pink-500 shadow-pink-500/50 text-white rounded px-2 py-1">{{ btnName }}</button>

</template>
<script>
  export default {
    props: {
      btnName: {
        type: String,
        default: 'btn',
      }
    }
  }
</script>